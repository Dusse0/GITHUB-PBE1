#!/bin/bash

pm2 save

pm2 startup systemd -u $USER --hp $HOME 
