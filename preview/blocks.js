/* ============================================================================
   DEL STUDIO — SECTION BLOCK LIBRARY
   ----------------------------------------------------------------------------
   Every block is one <tr> that drops straight into an email's 600px container
   table. All email-safe: tables, inline styles, no flex/grid, MSO-friendly.
   Images default to real estate photography so an inserted block looks right
   immediately — swap any of them afterwards with the Images picker.
   ============================================================================ */
const SERIF = "Georgia,'Times New Roman',Times,serif";
const SANS  = "Arial,Helvetica,sans-serif";
const E     = "../assets/estate/";
const I     = "../assets/interiors/";
const H     = "../assets/habeck/";
const C     = "../assets/commercial/";
const V     = "../assets/civic/";

const cell = (pad, inner) =>
  `<tr><td class="pad" style="padding:${pad};">${inner}</td></tr>`;

const eyebrow = t =>
  `<p style="margin:0 0 14px 0;font-family:${SANS};font-size:11px;line-height:14px;` +
  `letter-spacing:0.2em;text-transform:uppercase;color:#D12229;font-weight:bold;">${t}</p>`;

const caption = t =>
  `<p style="margin:10px 0 0 0;font-family:${SANS};font-size:13px;line-height:21px;` +
  `color:#6E6862;">${t}</p>`;

const label = t =>
  `<p style="margin:0 0 8px 0;font-family:${SANS};font-size:10px;line-height:14px;` +
  `letter-spacing:0.18em;text-transform:uppercase;color:#6E6862;font-weight:bold;">${t}</p>`;

const img = (src, w, alt) =>
  `<img src="${src}" width="${w}" alt="${alt}" style="display:block;width:100%;` +
  `max-width:${w}px;height:auto;border:0;" />`;

const BLOCKS = [

/* ─────────────── PORTFOLIO GRIDS ─────────────── */
{ g:"Portfolio grids", n:"Full-bleed image", d:"Edge to edge, 600 × 400", ratio:"3:2",
  html:`<tr><td style="padding:0;font-size:0;line-height:0;">${img(E+"main-house-wide.jpg",600,"Project photograph")}</td></tr>` },

{ g:"Portfolio grids", n:"Framed image + caption", d:"Inset, with a caption line", ratio:"3:2",
  html:cell("34px 56px 0 56px",
    img(E+"cottage.jpg",488,"Project photograph") +
    caption(`<strong style="color:#111111;">Caption headline.</strong> One or two lines about what this photograph is showing.`)) },

{ g:"Portfolio grids", n:"Two-up grid", d:"Side by side, stacks on mobile", ratio:"1:1",
  html:cell("32px 56px 0 56px",
    `<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
       <td valign="top" class="stack" width="238" style="width:238px;">${label("01 &mdash; Left")}${img(E+"port-cochere-sq.jpg",238,"Project photograph")}</td>
       <td class="stack-gap" width="12" style="width:12px;font-size:0;line-height:0;">&nbsp;</td>
       <td valign="top" class="stack" width="238" style="width:238px;">${label("02 &mdash; Right")}${img(E+"barn-elevation-sq.jpg",238,"Project photograph")}</td>
     </tr><tr><td colspan="3">${caption("A shared caption running under both frames.")}</td></tr></table>`) },

{ g:"Portfolio grids", n:"Three-up strip", d:"Three square tiles with labels", ratio:"1:1",
  html:cell("32px 56px 0 56px",
    `<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
       <td valign="top" class="stack" width="155" style="width:155px;">${img(E+"main-house-sq.jpg",155,"Project photograph")}
         <p style="margin:8px 0 0 0;font-family:${SANS};font-size:11px;line-height:17px;color:#6E6862;"><strong style="color:#111111;">Project one</strong><br />Location</p></td>
       <td class="stack-gap" width="11" style="width:11px;font-size:0;line-height:0;">&nbsp;</td>
       <td valign="top" class="stack" width="155" style="width:155px;">${img(E+"cottage-sq.jpg",155,"Project photograph")}
         <p style="margin:8px 0 0 0;font-family:${SANS};font-size:11px;line-height:17px;color:#6E6862;"><strong style="color:#111111;">Project two</strong><br />Location</p></td>
       <td class="stack-gap" width="11" style="width:11px;font-size:0;line-height:0;">&nbsp;</td>
       <td valign="top" class="stack" width="155" style="width:155px;">${img(E+"barn-sq.jpg",155,"Project photograph")}
         <p style="margin:8px 0 0 0;font-family:${SANS};font-size:11px;line-height:17px;color:#6E6862;"><strong style="color:#111111;">Project three</strong><br />Location</p></td>
     </tr></table>`) },

{ g:"Portfolio grids", n:"Four-up mosaic", d:"2 × 2 square grid", ratio:"1:1",
  html:cell("32px 56px 0 56px",
    `<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
       <tr>
         <td valign="top" class="stack" width="238" style="width:238px;padding-bottom:12px;">${img(E+"aerial-sq.jpg",238,"Project photograph")}</td>
         <td class="stack-gap" width="12" style="width:12px;font-size:0;line-height:0;">&nbsp;</td>
         <td valign="top" class="stack" width="238" style="width:238px;padding-bottom:12px;">${img(E+"cottage-pool-sq.jpg",238,"Project photograph")}</td>
       </tr>
       <tr>
         <td valign="top" class="stack" width="238" style="width:238px;">${img(E+"port-cochere-sq.jpg",238,"Project photograph")}</td>
         <td class="stack-gap" width="12" style="width:12px;font-size:0;line-height:0;">&nbsp;</td>
         <td valign="top" class="stack" width="238" style="width:238px;">${img(E+"interior-arch-sq.jpg",238,"Project photograph")}</td>
       </tr>
     </table>`) },

{ g:"Portfolio grids", n:"Feature + two small", d:"One wide over two squares", ratio:"mixed",
  html:cell("32px 56px 0 56px",
    `<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
       <tr><td colspan="3" style="padding-bottom:12px;">${img(E+"house-and-barn-wide.jpg",488,"Project photograph")}</td></tr>
       <tr>
         <td valign="top" class="stack" width="238" style="width:238px;">${img(E+"cottage-water-sq.jpg",238,"Project photograph")}</td>
         <td class="stack-gap" width="12" style="width:12px;font-size:0;line-height:0;">&nbsp;</td>
         <td valign="top" class="stack" width="238" style="width:238px;">${img(E+"barn-elevation-sq.jpg",238,"Project photograph")}</td>
       </tr>
     </table>`) },

{ g:"Portfolio grids", n:"Image + text beside", d:"Portrait image, copy to the right", ratio:"3:4",
  html:cell("32px 56px 0 56px",
    `<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
       <td valign="top" class="stack" width="200" style="width:200px;">${img(E+"interior-arch.jpg",200,"Project photograph")}</td>
       <td class="stack-gap" width="24" style="width:24px;font-size:0;line-height:0;">&nbsp;</td>
       <td valign="top" class="stack">
         ${label("Detail")}
         <p style="margin:0 0 14px 0;font-family:${SERIF};font-size:21px;line-height:29px;color:#111111;">A short headline about this detail.</p>
         <p style="margin:0;font-family:${SANS};font-size:14px;line-height:25px;color:#333333;">Two or three sentences explaining what the reader is looking at and why it took a drawing to get there.</p>
       </td>
     </tr></table>`) },

{ g:"Portfolio grids", n:"Interior + copy", d:"Room photo with the decision behind it", ratio:"1:1",
  html:cell("34px 56px 0 56px",
    `<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
       <td valign="top" class="stack" width="238" style="width:238px;">${img(I+"kitchen-sq.jpg",238,"Interior photograph")}</td>
       <td class="stack-gap" width="22" style="width:22px;font-size:0;line-height:0;">&nbsp;</td>
       <td valign="top" class="stack">${label("01 &mdash; The room")}
         <p style="margin:0 0 12px 0;font-family:${SERIF};font-size:21px;line-height:29px;color:#111111;">The decision behind it.</p>
         <p style="margin:0;font-family:${SANS};font-size:14px;line-height:25px;color:#333333;">What had to be settled on paper before this room could exist.</p></td>
     </tr></table>`) },

{ g:"Portfolio grids", n:"Range strip", d:"Residential · hospitality · civic", ratio:"1:1",
  html:cell("32px 56px 0 56px",
    `<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
       ${[[H+"habeck-exterior-sq.jpg","Residential","Maryland"],
          [C+"dicks-last-resort-sq.jpg","Hospitality","Inner Harbor"],
          [V+"union-station-sq.jpg","Civic","Washington, DC"]].map((x,i)=>
        `<td valign="top" class="stack" width="155" style="width:155px;">${img(x[0],155,x[1]+" project")}
           <p style="margin:8px 0 0 0;font-family:${SANS};font-size:11px;line-height:17px;color:#6E6862;">
           <strong style="color:#111111;">${x[1]}</strong><br />${x[2]}</p></td>` +
        (i<2?`<td class="stack-gap" width="11" style="width:11px;font-size:0;line-height:0;">&nbsp;</td>`:"")).join("")}
     </tr></table>`) },

/* ─────────────── TEXT ─────────────── */
{ g:"Text", n:"Eyebrow + headline", d:"Section opener", ratio:"—",
  html:cell("44px 56px 0 56px",
    eyebrow("Section label") +
    `<h2 class="h1" style="margin:0;font-family:${SERIF};font-size:35px;line-height:43px;font-weight:normal;color:#111111;mso-line-height-rule:exactly;">A headline that carries the idea on its own.</h2>`) },

{ g:"Text", n:"Headline + red subhead", d:"Two-beat opener", ratio:"—",
  html:cell("44px 56px 0 56px",
    `<h2 class="h1" style="margin:0 0 20px 0;font-family:${SERIF};font-size:35px;line-height:43px;font-weight:normal;color:#111111;mso-line-height-rule:exactly;">The first line sets it up.</h2>
     <p class="h2" style="margin:0;font-family:${SERIF};font-size:25px;line-height:34px;color:#D12229;font-style:italic;mso-line-height-rule:exactly;">And the second line lands it.</p>`) },

{ g:"Text", n:"Body paragraphs", d:"Two paragraphs of serif copy", ratio:"—",
  html:cell("26px 56px 0 56px",
    `<p class="body-copy" style="margin:0 0 22px 0;font-family:${SERIF};font-size:18px;line-height:31px;color:#111111;mso-line-height-rule:exactly;">First paragraph. Keep it to two or three sentences — email copy is scanned, not read.</p>
     <p class="body-copy" style="margin:0;font-family:${SERIF};font-size:18px;line-height:31px;color:#111111;mso-line-height-rule:exactly;">Second paragraph, carrying the thought one step further.</p>`) },

{ g:"Text", n:"Tinted list", d:"Panel with dash bullets", ratio:"—",
  html:cell("34px 56px 0 56px",
    `<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#F5F3F0;"><tr>
       <td class="pad-sm" style="padding:30px 32px;">
         <p style="margin:0 0 20px 0;font-family:${SANS};font-size:11px;line-height:14px;letter-spacing:0.18em;text-transform:uppercase;color:#111111;font-weight:bold;">List heading</p>
         <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
           ${[1,2,3].map((i,k)=>`<tr><td valign="top" width="26" style="font-family:${SERIF};font-size:15px;line-height:26px;color:#D12229;">&mdash;</td>
             <td style="font-family:${SANS};font-size:15px;line-height:26px;color:#333333;${k<2?"padding-bottom:12px;":""}"><strong style="color:#111111;">Point ${i}.</strong> A sentence explaining it.</td></tr>`).join("")}
         </table>
       </td></tr></table>`) },

/* ─────────────── HOOKS & QUOTES ─────────────── */
{ g:"Hooks & quotes", n:"Dark callout", d:"Black panel, red rule — the insight", ratio:"—",
  html:cell("40px 56px 0 56px",
    `<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#111111;"><tr>
       <td class="pad-sm" style="padding:34px;border-left:4px solid #D12229;">
         <p style="margin:0 0 12px 0;font-family:${SANS};font-size:11px;line-height:14px;letter-spacing:0.2em;text-transform:uppercase;color:#D12229;font-weight:bold;">Notice something</p>
         <p style="margin:0 0 16px 0;font-family:${SERIF};font-size:23px;line-height:33px;color:#FFFFFF;mso-line-height-rule:exactly;">The one sentence you want them to remember.</p>
         <p style="margin:0;font-family:${SANS};font-size:15px;line-height:27px;color:#C9C4BF;">Three or four lines unpacking it — the reason it is true, and what it means for the reader's own project.</p>
       </td></tr></table>`) },

{ g:"Hooks & quotes", n:"Pull quote", d:"Large serif, red rule", ratio:"—",
  html:cell("40px 56px 0 56px",
    `<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
       <td style="border-left:3px solid #D12229;padding:4px 0 4px 24px;">
         <p style="margin:0 0 12px 0;font-family:${SERIF};font-size:26px;line-height:37px;color:#111111;mso-line-height-rule:exactly;">&ldquo;A sentence in the client's own words that does more work than a paragraph of ours.&rdquo;</p>
         <p style="margin:0;font-family:${SANS};font-size:12px;line-height:18px;letter-spacing:0.1em;text-transform:uppercase;color:#6E6862;">Client name &middot; Project, Maryland</p>
       </td></tr></table>`) },

{ g:"Hooks & quotes", n:"Stat row", d:"Three numbers across", ratio:"—",
  html:cell("36px 56px 0 56px",
    `<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
       ${[["1986","Established"],["40","Years of practice"],["MD·DC·VA","Where we work"]].map((s,i)=>
         `<td valign="top" class="stack" width="162" style="width:162px;${i<2?"padding-right:1px;":""}">
            <p style="margin:0 0 4px 0;font-family:${SERIF};font-size:32px;line-height:38px;color:#D12229;">${s[0]}</p>
            <p style="margin:0;font-family:${SANS};font-size:11px;line-height:16px;letter-spacing:0.12em;text-transform:uppercase;color:#6E6862;">${s[1]}</p></td>`).join("")}
     </tr></table>`) },

{ g:"Hooks & quotes", n:"Dark project band", d:"Meta strip under a hero", ratio:"—",
  html:`<tr><td style="background-color:#111111;padding:0;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr>
        <td class="pad" style="padding:26px 56px;">
          <p style="margin:0 0 6px 0;font-family:${SANS};font-size:10px;line-height:14px;letter-spacing:0.2em;text-transform:uppercase;color:#D12229;font-weight:bold;">Project type &nbsp;&middot;&nbsp; Location</p>
          <p style="margin:0;font-family:${SANS};font-size:13px;line-height:20px;letter-spacing:0.05em;color:#C9C4BF;">Scope one &middot; Scope two &middot; Scope three</p>
        </td></tr></table></td></tr>` },

/* ─────────────── CALLS TO ACTION ─────────────── */
{ g:"Calls to action", n:"Red button + note", d:"Standard CTA", ratio:"—",
  html:cell("30px 56px 0 56px",
    `<table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn"><tr>
       <td align="center" bgcolor="#D12229" style="padding:16px 32px;mso-padding-alt:16px 32px;">
         <a href="{{BOOKING_URL}}" target="_blank" style="display:block;font-family:${SANS};font-size:12px;line-height:16px;font-weight:bold;letter-spacing:0.14em;text-transform:uppercase;color:#FFFFFF;text-decoration:none;">Book a consultation</a>
       </td></tr></table>
     <p style="margin:16px 0 0 0;font-family:${SANS};font-size:14px;line-height:23px;color:#6E6862;">Or call the studio &mdash; <a href="tel:+14109230922" style="color:#111111;text-decoration:underline;font-weight:bold;">410-923-0922</a></p>`) },

{ g:"Calls to action", n:"Dark CTA band", d:"Full-width black, centred", ratio:"—",
  html:`<tr><td style="padding:44px 0 0 0;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#111111;"><tr>
        <td class="pad" align="center" style="padding:42px 56px;">
          <p style="margin:0 0 22px 0;font-family:${SERIF};font-size:25px;line-height:35px;color:#FFFFFF;mso-line-height-rule:exactly;">One line that makes the next step feel obvious.</p>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" class="btn"><tr>
            <td align="center" bgcolor="#D12229" style="padding:18px 40px;mso-padding-alt:18px 40px;">
              <a href="{{BOOKING_URL}}" target="_blank" style="display:block;font-family:${SANS};font-size:13px;line-height:17px;font-weight:bold;letter-spacing:0.14em;text-transform:uppercase;color:#FFFFFF;text-decoration:none;">Book a consultation</a>
            </td></tr></table>
          <p style="margin:22px 0 0 0;font-family:${SANS};font-size:14px;line-height:22px;color:#9C9691;">Prefer to just talk? &nbsp;<a href="tel:+14109230922" style="color:#FFFFFF;text-decoration:underline;font-weight:bold;">410-923-0922</a></p>
        </td></tr></table></td></tr>` },

{ g:"Calls to action", n:"Image CTA", d:"The client's own advert, clickable", ratio:"600×420",
  html:`<tr><td style="padding:40px 0 0 0;font-size:0;line-height:0;">
      <a href="{{BOOKING_URL}}" target="_blank" style="text-decoration:none;">
        <img src="../assets/creative/cta-custom-home.jpg" width="600" alt="Want to build a custom home? Book a complimentary consultation." style="display:block;width:100%;max-width:600px;height:auto;border:0;" />
      </a></td></tr>` },

/* ─────────────── STRUCTURE ─────────────── */
{ g:"Structure", n:"Divider rule", d:"Hairline separator", ratio:"—",
  html:cell("34px 56px 0 56px",
    `<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td style="height:1px;background-color:#E3DFD9;line-height:1px;font-size:0;">&nbsp;</td></tr></table>`) },

{ g:"Structure", n:"Spacer", d:"32px of breathing room", ratio:"—",
  html:`<tr><td style="height:32px;line-height:32px;font-size:0;">&nbsp;</td></tr>` },

{ g:"Structure", n:"Sign-off", d:"Don's signature block", ratio:"—",
  html:cell("36px 56px 0 56px",
    `<p style="margin:0 0 4px 0;font-family:${SERIF};font-size:22px;line-height:28px;color:#111111;font-style:italic;">Don</p>
     <p style="margin:0;font-family:${SANS};font-size:13px;line-height:21px;color:#6E6862;"><strong style="color:#111111;">Donald E. Lipscomb, Jr., AIA</strong> &middot; President, DEL Studio Architects</p>`) },
];
