const APIdata = [
  {
    heading: 'API Calls',
    subHeading: 'Return data from coind',
    calls: [
      {
        name: 'sendrawtransaction [rawtx]',
        info: 'Broadcasts a raw transaction on the network. POST a "rawtx" body parameter to get one of three possible results: { raw, decoded, error } Use the optional "?decrypt=1" in GET to get decoded result.',
        path: 'POST /api/sendrawtransaction'
      },

      {
        name: 'login [address] [signature] [message]',
        info: 'Performs Off-Chain verification of the message. POST a "rawtx" body parameter to get one of three possible results: { raw, decoded, error } Use the optional "?decrypt=1" in GET to get decoded result.',
        path: 'POST /api/login'
      },

      {
        name: 'getAddress [hash]',
        info: 'Returns information for given address.',
        path: '/api/address/caNfL8qFkzET535ANG8BKQVWGk8jVygmhS'
      },
      {
        name: 'getBlock [hash] [height]',
        info: 'Returns block information for the given hash or height.',
        path: '/api/block/51977a1138b282338797235cfce21e6f0da0d0d7876a5522dfa456eabac587cc'
      },
      {
        name: 'getBlockAverage',
        info: 'Returns the average block time over 24 hours.',
        path: '/api/block/average'
      },
      {
        name: 'getCoin',
        info: 'Returns coin information.',
        path: '/api/coin/'
      },
      {
        name: 'getCoinHistory',
        info: 'Returns the coin history.',
        path: '/api/coin/history'
      },
      {
        name: 'getMasternodes',
        info: 'Returns masternode information.',
        path: '/api/masternode'
      },
      {
        name: 'getMasternodeByAddress',
        info: 'Returns masternode information by Wallet Address.',
        path: '/api/masternode/caNfL8qFkzET535ANG8BKQVWGk8jVygmhS'
      },
      {
        name: 'getMasternodeCount',
        info: 'Returns masternodes enabled and total counts.',
        path: '/api/masternodecount'
      },
      {
        name: 'getMasternodeAverage',
        info: 'Returns the average payment for a masternode vs 24 hours.',
        path: '/api/masternode/average'
      },
      {
		    name: 'getProposals',
		    info: 'Returns current Governance proposals',
		    path: '/api/proposals'
	    },
      {
        name: 'getPeer',
        info: 'Returns peer information.',
        path: '/api/peer'
      },
      {
        name: 'getSupply',
        info: 'Returns circulating and total supply information.<br />https://github.com/coincheckup/crypto-supplies',
        path: '/api/supply'
      },
      {
        name: 'getTop100',
        info: 'Returns top 100',
        path: '/api/top100'
      },
      {
        name: 'getTXs',
        info: 'Returns transaction information.',
        path: '/api/tx'
      },
      {
        name: 'getRewards',
        info: 'Returns block rewards information.',
        path: '/api/rewards'
      },
      {
        name: 'getTXLatest',
        info: 'Returns latest transaction information.',
        path: '/api/tx/latest'
      },
      {
        name: 'getTX [hash]',
        info: 'Returns information for the given transaction.',
        path: '/api/tx/8da3f4bebda243128fab3bbb82a7a192298082a08b3b789f18d8b72df24784d7'
      },
      {
        name: 'getDifficulty',
        info: 'Returns the current difficulty.',
        path: '/api/getdifficulty'
      },
      {
        name: 'getConnectionCount',
        info: 'Returns the number of connections the block explorer has to other nodes.',
        path: '/api/getconnectioncount'
      },
      {
        name: 'getBlockCount',
        info: 'Returns the current block index.',
        path: '/api/getblockcount'
      },
      {
        name: 'getNetworkHashPS',
        info: 'Returns the current network hashrate. (hash/s)',
        path: '/api/getnetworkhashps'
      },
      {
        name: 'getMovements',
        info: 'Returns Carver2D movements.',
        path: '/api/movements'
      },
      {
        name: 'getTimeIntervals',
        info: 'Returns Time-Based Intervals. Used for advanced charting such as daily POS ROI%.',
        path: '/api/timeIntervals'
      },

    ]
  },
  {
    heading: 'Extended API',
    subHeading: 'Return data from local indexes',
    calls: [
      {
        name: 'getMoneySupply',
        info: 'Returns the current money supply.',
        path: '/ext/getmoneysupply'
      },
      // { name: 'getdistribution',
      //   info: 'Returns the number of connections the block explorer has to other nodes.',
      //   path: '/ext/getdistribution'
      // },
      {
        name: 'getAddress',
        info: 'Returns address information.',
        path: '/ext/getaddress'
      },
      {
        name: 'getBalance',
        info: 'Returns the current balance.',
        path: '/ext/getbalance'
      },
      {
        name: 'getLastTXs',
        info: 'Returns the last transactions.',
        path: '/ext/getlasttxs'
      }
    ]
  },
  {
    heading: 'Linking (GET)',
    subHeading: 'Linking to the block explorer',
    calls: [
      {
        name: 'Transaction (/#/tx/[hash])',
        info: 'Returns transaction information',
        path: '/#/tx/8da3f4bebda243128fab3bbb82a7a192298082a08b3b789f18d8b72df24784d7'
      },
      {
        name: 'Block (/#/block/[hash|height]',
        info: 'Returns block information.',
        path: '/#/block/51977a1138b282338797235cfce21e6f0da0d0d7876a5522dfa456eabac587cc'
      },
      {
        name: 'Address (/#/address/[hash]',
        info: 'Returns address information.',
        path: '/#/block/51977a1138b282338797235cfce21e6f0da0d0d7876a5522dfa456eabac587cc'
      },
      // { name: 'qr (qr/[hash]',
      //   info: 'Returns qr code information.',
      //   path: '/#/qr/000000000001eb792fe1ac3f901d2373509769f5179d9fe2fd3bf8cb3b6ebec9'
      // },
    ]
  }
]

export default APIdata;
