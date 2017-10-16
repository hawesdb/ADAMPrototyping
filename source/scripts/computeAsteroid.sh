#!/bin/bash
maxTime=$((2 * 60))
secs=maxTime
mysql --host=35.190.165.95 --user=root
use DB_requests
while [ $secs -gt 0 ]; do
   sleep 1
   : $((secs--))
sudo poweroff
done