#!/bin/sh
# Notify IndexNow (Bing, Yandex, etc.) of changed URLs. Usage: ./indexnow-submit.sh /page1 /page2 ...
KEY=9ff7bfdbd12f4de09ed524cfc31616ee
HOST=optimumchiropracticcare.com
URLS=$(for p in "$@"; do printf '"https://%s%s",' "$HOST" "$p"; done | sed 's/,$//')
curl -s -X POST https://api.indexnow.org/indexnow -H 'Content-Type: application/json' -d "{\"host\":\"$HOST\",\"key\":\"$KEY\",\"keyLocation\":\"https://$HOST/$KEY.txt\",\"urlList\":[$URLS]}" -w '%{http_code}\n'
