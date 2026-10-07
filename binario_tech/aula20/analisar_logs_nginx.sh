#!/bin/bash

echo "========================================="
echo "     ANALISE DE LOGS - NGINX"
echo "========================================="

tail -n 15 /var/log/nginx/access.log | awk '$9 == 200'

echo "=========================================" 
