#!/bin/sh
# startup.sh

systemctl restart apache2 &
/usr/sbin/apache2ctl -D FOREGROUND
laravel-echo-server start