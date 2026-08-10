#!/bin/bash
# ────────────────────────────────────────────────────────────────
#  Del Studio Architects — email preview server
#  Double-click this file in Finder, or run:  ./preview.command
#
#  Note: we deliberately avoid port 8080. Docker Desktop commonly
#  holds *:8080 on IPv6, which makes "localhost:8080" resolve to
#  Docker instead of this server. We also open 127.0.0.1 rather
#  than "localhost" so there is no IPv4/IPv6 ambiguity.
# ────────────────────────────────────────────────────────────────
cd "$(dirname "$0")" || exit 1

PORT=8347
# skip any port with a listener, on either IPv4 or IPv6
while lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; do
  PORT=$((PORT+1))
  if [ "$PORT" -gt 8420 ]; then echo "No free port found."; exit 1; fi
done

URL="http://127.0.0.1:$PORT/preview/"

echo ""
echo "  DEL STUDIO ARCHITECTS — email sequence preview"
echo "  ─────────────────────────────────────────────"
echo "  $URL"
echo ""
echo "  QA checks:  http://127.0.0.1:$PORT/preview/qa-widths.html"
echo "  1-4 / arrow keys switch emails.  Ctrl-C to stop."
echo ""

( sleep 1; open "$URL" ) &
exec python3 -m http.server "$PORT" --bind 127.0.0.1
