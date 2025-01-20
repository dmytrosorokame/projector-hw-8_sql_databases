#!/bin/bash

TIME=60s
CONCURRENT=50

echo "[API] Starting creating users with $CONCURRENCY concurrency and $TIME time."
siege -c$CONCURRENT -t$TIME -f scripts/urls.txt
echo "[API] Creating users finished."