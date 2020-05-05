#!/bin/bash
# Download latest node and install.
cnmclink=`curl -s https://api.github.com/repos/cryptonodes-core/cryptonodes-core/releases/latest | grep browser_download_url | grep linux64 | cut -d '"' -f 4`
mkdir -p /tmp/cryptonodes
cd /tmp/cryptonodes
curl -Lo cryptonodes.tar.gz $cnmclink
tar -xzf cryptonodes.tar.gz
sudo mv ./bin/* /usr/local/bin
cd
rm -rf /tmp/cryptonodes
mkdir ~/.cryptonodes

# Setup configuration for node.
rpcuser=$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c 13 ; echo '')
rpcpassword=$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c 32 ; echo '')
cat >~/.cryptonodes/cryptonodes.conf <<EOL
rpcuser=$rpcuser
rpcpassword=$rpcpassword
daemon=1
txindex=1
EOL

# Start node.
cryptonodesd
