![Cryptonodes Logo](https://www.cryptonodes.ch/wp-content/uploads/2018/06/logo-300x300.png)

Cryptonodes Explorer
&middot;
[![GitHub license](https://img.shields.io/github/license/bulwark-crypto/bulwark-explorer.svg)](https://github.com/bulwark-crypto/bulwark-explorer/blob/master/COPYING) [![Build Status](https://travis-ci.org/bulwark-crypto/bulwark-explorer.svg?branch=master)](https://travis-ci.org/bulwark-crypto/bulwark-explorer) [![Discord](https://img.shields.io/discord/374271866308919296.svg)](https://discord.me/bulwarkcrypto) [![GitHub version](https://badge.fury.io/gh/bulwark-crypto%2Fbulwark-explorer.svg)](https://badge.fury.io/gh/bulwark-crypto%2Fbulwark-explorer)
=====

The most advanced blockchain eplorer for masternode, proof-of-stake and proof-of-work chains.

Features:

- World's most advanced Proof Of Stake calculator based on real blockchain rewards data
- Per-block POS, POW, MN rewards breakdown
- Detailed per-address rewards breakdown and rewards summary
- Automatic chain rewinding
- Graceful error recovery (Unreconciliation)

# Easy Installation Instructions

1. SSH into a clean UBUNTU 18.04 VPS with root access
2. `apt-get install git`
3. `adduser explorer`
4. `usermod -aG sudo explorer`
5. Ensure your coin RPC is running
6. `su explorer`
7. `bash <( curl https://raw.githubusercontent.com/cryptonodes-core/cryptoex/master/script/install.sh )`

## Post-Installation

Check block syncing status with `tail -f /home/explorer/cryptoex/tmp/block.log` 

You will most likely see `Error: connect ECONNREFUSED` this is because your RPC username/password/port do not match your coin. Please check your coin `.config` file (ex: `/home/explorer/.cryptonodes/cryptonodes.conf`) 

You will see something like this:
```
rpcport=34219
rpcuser=someuserhere
rpcpassword=somepasswordhere
daemon=1
txindex=1
```
Please ensure your `/home/explorer/cryptoex/config.js` matches the rpc information of your coin.

# Advanced Installation Instructions

## Required
This repo assumes `git`, `mongodb`, `node`, `yarn`, and are installed with configuration done.  Please adjust commands to your local environment. 

Download links:

https://docs.mongodb.com/manual/administration/install-on-linux/

https://nodejs.org/en/download/package-manager/

https://yarnpkg.com/lang/en/docs/install/

It is also required to have the Cryptonodes daemon running in the background. It is recommended to set this up before beginning to set up the explorer so that it syncs by the time you need it.

This will install the latest Cryptonodes wallet and create a rpc username/password before starting the daemon.

## Manual Install
`git clone https://github.com/cryptonodes-core/cryptoex.git` - copy repo to local folder.

`cd cryptoex` - change into project directory.

`yarn install` - install packages used by the system.

## Configure
#### Cryptoex API Configuration
`cp config.template.js config.js` - setup configuration using template.

#### Database Configuration
`mongo` - connect using mongo client.

`use cryptoex` - switch to database.

`db.createUser( { user: "cryptoexuser", pwd: "cryptoExplorer!1", roles: [ "readWrite" ] } )` - create a user with the values stored in the `config.js` file from above, meaning they should match.

`exit` - exit the mongo client.

__IMPORTANT:__ _You should not build the frontend using the same `config.js` file as created above or  you WILL LEAK sensitive database information._

#### CryptoEx UI Configuration
On the local development machine, not the server/VPS, run `cp config.template.js config.js` to create new configuration file that will have the UI information in it.  

__IMPORTANT:__ _You should have two `config.js` files, one for the server with the sensitive database connection information, and one that is used by the developer/designer on their local machine to configure and build the UI._

#### Crontab
The following automated tasks are currently needed for cryptoex to update but before running the tasks please update the cron script `/path/to/cryptoex/script/cron_block.sh` for the block with the local `/path/to/node`.

`yarn run cron:coin` - will fetch coin related information like price and supply from coinmarketcap.com.

`yarn run cron:masternode` - updates the masternodes list in the database with the most recent information clearing old information before.

`yarn run cron:peer` - gather the list of peers and fetch geographical IP information.

`yarn run cron:block` - will sync blocks and transactions by storing them in the database.

`yarn run cron:rich` - generate the rich list.

__Note:__ is is recommended to run all the crons before editing the crontab to have the information right away.  Follow the order above, start with `cron:coin` and end with `cron:rich`.

To setup the crontab please see run `crontab -e` to edit the crontab and paste the following lines (edit with your local information):
```
*/1 * * * * cd /path/to/cryptoex && ./script/cron_block.sh >> ./tmp/block.log 2>&1
*/1 * * * * cd /path/to/cryptoex && /path/to/node ./cron/masternode.js >> ./tmp/masternode.log 2>&1
*/1 * * * * cd /path/to/cryptoex && /path/to/node ./cron/peer.js >> ./tmp/peer.log 2>&1
*/1 * * * * cd /path/to/cryptoex && /path/to/node ./cron/rich.js >> ./tmp/rich.log 2>&1
*/5 * * * * cd /path/to/cryptoex && /path/to/node ./cron/coin.js >> ./tmp/coin.log 2>&1
0 0 * * * cd /path/to/cryptoex && /path/to/node ./cron/timeIntervals.js >> ./tmp/timeIntervals.log 2>&1
```
For crontab config:
- `/path/to/cryptoex` example is `/home/explorer/cryptoex`
- `/path/to/node` example is `/usr/bin/nodejs`

## Build
At this time only the client web interface needs to be built using webpack and this can be done by running `yarn run build:web`.  This will bundle the application and put it in the `/public` folder for delivery.

## Run
`yarn run start:api` - will start the api.

`yarn run start:web` - will start the web, open browser [http://localhost:8081](http://localhost:8081).

## Test
`yarn run test:client` - will run the client side tests.

`yarn run test:server` - will test the rpc connection, database connection, and api endpoints.

## Development - Important File Locations

#### Client - Frontend (react, react-redux)

`client/App.jsx` - Contains all react routes to components (using react-router-dom)

`client/core/Reducers.jsx` - Contains all reducers used in redux `connect()` mapping (using react-redux)

`client/core/Actions.jsx` - Contains all actions used in redux `connect()` mapping (using react-redux)


#### Server - Rest API (node, express, mongo, mongoose)

`server/route/api.js` - Contains all public rest api endpoint routes
