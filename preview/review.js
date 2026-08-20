/* ============================================================================
   DEL STUDIO — SHARED REVIEW STORE
   ----------------------------------------------------------------------------
   Saved versions go to a Supabase table both sides can read. Don saves from the
   hosted preview; the agency sees it appear and downloads the HTML.

   The key below is the PUBLISHABLE (anon) key — safe to ship in a static page.
   Row-level security allows only SELECT and INSERT: a saved version can never
   be edited or deleted from the browser.
   ============================================================================ */
const SUPA_URL = "https://aupnehdgdzosibuypxmt.supabase.co";
const SUPA_KEY = "sb_publishable_RXL3jE19I87n6csZ68K4LA_0yk56CbL";
const TABLE    = "delstudio_email_versions";

const SUPA_HEADERS = {
  "apikey": SUPA_KEY,
  "Authorization": "Bearer " + SUPA_KEY,
  "Content-Type": "application/json",
};

const REST = `${SUPA_URL}/rest/v1/${TABLE}`;

/** Append a version. Returns the created row. */
async function saveVersion(row) {
  const r = await fetch(REST, {
    method: "POST",
    headers: { ...SUPA_HEADERS, Prefer: "return=representation" },
    body: JSON.stringify([row]),
  });
  if (!r.ok) throw new Error(`Save failed (${r.status}): ${await r.text()}`);
  return (await r.json())[0];
}

/** List versions, newest first. HTML is excluded — it is fetched on demand. */
async function listVersions(limit = 200) {
  const cols = "id,email_file,email_name,label,author,status,note,created_at";
  const r = await fetch(`${REST}?select=${cols}&order=created_at.desc&limit=${limit}`,
                        { headers: SUPA_HEADERS });
  if (!r.ok) throw new Error(`Load failed (${r.status})`);
  return r.json();
}

/** Fetch one version's HTML. */
async function getVersionHTML(id) {
  const r = await fetch(`${REST}?select=html,email_file&id=eq.${id}`, { headers: SUPA_HEADERS });
  if (!r.ok) throw new Error(`Fetch failed (${r.status})`);
  const rows = await r.json();
  if (!rows.length) throw new Error("Version not found");
  return rows[0];
}

/* ── local autosave: protects in-progress edits against a refresh ────────── */
const LS_PREFIX = "delstudio:draft:";
const lsKey = f => LS_PREFIX + f;
const saveDraft    = (f, html) => { try { localStorage.setItem(lsKey(f), html); } catch (_) {} };
const loadDraft    = f => { try { return localStorage.getItem(lsKey(f)); } catch (_) { return null; } };
const clearDraft   = f => { try { localStorage.removeItem(lsKey(f)); } catch (_) {} };
const listDrafts   = () => {
  const out = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(LS_PREFIX)) out.push(k.slice(LS_PREFIX.length));
    }
  } catch (_) {}
  return out;
};

const REVIEWER_KEY = "delstudio:reviewer";
const getReviewer = () => { try { return localStorage.getItem(REVIEWER_KEY) || ""; } catch (_) { return ""; } };
const setReviewer = n => { try { localStorage.setItem(REVIEWER_KEY, n); } catch (_) {} };

const STATUS_META = {
  approved: { label: "Approved",      cls: "ok"   },
  changes:  { label: "Needs changes", cls: "warn" },
  saved:    { label: "Saved",         cls: "neu"  },
};

function timeAgo(iso) {
  const s = (Date.now() - new Date(iso).getTime()) / 1000;
  if (s < 60)     return "just now";
  if (s < 3600)   return `${Math.floor(s/60)}m ago`;
  if (s < 86400)  return `${Math.floor(s/3600)}h ago`;
  if (s < 604800) return `${Math.floor(s/86400)}d ago`;
  return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

/* ── GoHighLevel output ───────────────────────────────────────────────────
   Relative asset paths cannot resolve inside an email, and {{BOOKING_URL}} /
   {{GUIDE_URL}} were never merge fields — they are slots for real URLs. Left
   alone the href is literally "{{GUIDE_URL}}" and the link 404s.            */
const GHL = {
  bookingUrl : "https://delstudioarchitects.com/contact/",   // swap for Calendly
  firstName  : "{{contact.first_name}}",
  unsubscribe: "{{unsubscribe_link}}",                       // verify in GHL's picker
  guidePath  : "docs/renovation-process-guide.pdf",
};

/** Absolutise asset paths; optionally resolve tokens for GoHighLevel. */
function finalizeHTML(html, assetBase, forGHL) {
  let out = html.split("../assets/").join(assetBase);
  if (forGHL) {
    out = out
      .split("{{FirstName}}").join(GHL.firstName)
      .split("{{BOOKING_URL}}").join(GHL.bookingUrl)
      .split("{{GUIDE_URL}}").join(assetBase + GHL.guidePath)
      .split("{{UnsubscribeURL}}").join(GHL.unsubscribe);
  }
  return out;
}
