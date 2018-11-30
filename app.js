const figlet = require('figlet')
const clear = require('clear')
const chalk = require('chalk')
const eosjs = require('eosjs')
const { ecc } = eosjs.modules

// clear()
// console.log(
//   chalk.yellow(figlet.textSync('EOS-nodejs', { horizontalLayout: 'full' }))
// )
// console.log(chalk.blue('made by Marcel Morales'))
// console.log(chalk.green('Using standard private key on test net by default. Change --config-- in ./eos.js'))
// console.log(chalk.green('Make sure to have docker running as explained at https://github.com/EOSIO/eosjs/tree/master/docker'))
// console.log(chalk.green('out comment line to enable functions in ./app.js and get --help'))

// ----TEST VARIABLES ----
// const pubKeyTest = 'EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV' // from privKeyTest, local test net
// const pubKeyTest2 = 'EOS7pMyqadiD7DE7uZEHuEejZu2Qa7kiMmNVHf35bJEtqyniy8vBG' // from 'itamnetwork2' on main net
// const pubKeyTest3 = 'EOS86rDVGVU5UJAeAvDvRNKGJEDMjxGWr9vJBtBzCUW7s6zK2Puqp'

// const privKeyTest = '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3'
// const privKeyTest2 = '5HrZWBGf6ovYBqdDkoGBqzXCKRxyXdkEmke6LVufN3zK4q9Hctc'
// const exampleTrxMainNet = '87134edc78cf9d1d183e896cbd96c8a89144511b33bce91c82f99321d0d2673a'
// const trBlockHeight = 10251887
// const acc1 = 'inita'
// const acc2 = 'initb'
// const accBinance = 'binancecleos'
// const bytes = 8192
// const stake_net_quantity = '10.0000 SYS'
// const stake_cpu_quantity = '10.0000 SYS'
// const transfer = 0
// const quantityTest = '2.0000 SYS'

// ALL  UNCOMMENTED  FUNCTIONS WILL BE INVOKED WHEN RUNNING node app.js in terminal

// ----BLOCKCHAIN----
// eos.getBlockHeight()
// eos.getCurrentBlockInfo()
// ----KEYS----
//  more infos: https://github.com/EOSIO/eosjs-ecc/blob/master/src/key_private.js

//  src: https://github.com/bitcoinjs/bip39/blob/master/index.js
//  Generate a random mnemonic (uses crypto.randomBytes under the hood), defaults to 128-bits of entropy
//  strength = 256 for 24 words, 128 for 12
//  derives the master, owner & active private and public keys of mnemonic
// eos.generateMnemonic()
// eos.deriveFromMnemonic(eos.generateMnemonic(128))
//  seed: 'string' any length string. This is private. The same seed produces the same
//  private key every time. At least 128 random bits should be used to produce a good private key.
// console.log('privKey generated from seed SEED123: ', eos.generatePrivKeyFromSeed('SEED123'))
// eos.generateRandomPrivKey()
// eos.fromPrivToPub(privKeyTest)
// eos.isPubKeyValid(pubKeyTest)
// eos.isPrivKeyValid(privKeyTest)

// ----ACCOUTS----
//  EOS public and private keys can be generated off the chain, but EOS users need to create a user
//  name before they can operate on the chain. So activated users are needed to send on-chain transactions
//  to new users in order to help them create accounts. By default users need to find Tripartite help.
//  main net only:
// eos.getAccountNamesFromPubKey(pubKeyTest2)
//  main net only: (i.e. 'binancecleos'):
// eos.getAccSystemStats(accBinance)
//  account name must be less than 13 characters
//  can only contain the following symbols: .12345abcdefghijklmnopqrstuvwxyz:
//  default: bytes = 8192, stake_net_quantity = '10.0000 SYS', stake_cpu_quantity = '10.0000 SYS', transfer = 0:
//  ownerPubKey and activePubKey can be the same, but is less secure
//  optional: bytes, stake_net_quantity, stake_cpu_quantity, transfer
// eos.createAccountPackage('ownerPubKey', 'activePubKey', 'accountName', bytes, stake_net_quantity, stake_cpu_quantity, transfer)
//  'accountName', ownerPubKey, activePubKey
// eos.createSingleAccount('accountName', pubKeyTest, pubKeyTest)

// ----TRANSACTIONS----
// Transactions can be considered confirmed with 99.9% certainty after an average of 0.25 seconds from time of broadcast.
// The EOS aBFT algorithm provides 100% confirmation of irreversibility within 1 second.
//  sender, receiver, quantity in format: '50.0000 SYS' , memo, | + optional: sign = true, broadcast = true
// eos.transfer(acc1, acc2, '4.0000 SYS', 'myMemo12', true, true)
//  first creates an unsigned transaction, signs it and then broadcasts it. All separately. See logs()
// eos.transferSignPushTransaction(acc1, acc2, '5.0000 SYS', 'myMemo2')
//  just signs the transaction and returns it:
//  args: tr, from, to, quantity, memo
// eos.signTr(tr, acc1, acc2, quantity, memo) // trxData, privKeyTest
//  insert return value from eos.transfer(..., signed = true, broadcast = false)
//  returns signature. Args: (from, to, quantity, memo = '')
// eos.getSignature(acc1, acc2, quantityTest, memo = 'myMemo7')
//  insert eg.: return value from eos.transfer(..., signed = true, broadcast = false);
// eos.pushTransaction(returnValueFromEos.transfer)
//  transfers, signs and broadcasts the transaction separately:
// eos.transferSignPushTransaction(acc1, acc2, '5.0000 SYS', 'myMemo2')
//  accountName, (+ int allAboveBlockHeightX --> optional)
// eos.getOutgoingTransactions(accBinance)
//  perform transaction and add the id + block number as args
//  note: example tr only visible when switching to main net
// eos.getTransaction(exampleTrxMainNet, trBlockHeight) // sender: 'binancecleos' on main net
// eos.isTransactionExecuted(exampleTrxMainNet, trBlockHeight)

// ----CURRENCY----
// eos.getCurrencyBalance(acc1) //  using EOS account name
// works for tokens as well, see https://github.com/eoscafe/eos-airdrops
// 'SYMBOL', 'eos.contractName'
// eos.getCurrencyStats('IQ', 'everipediaiq') // IQ on main net
//  amount in format '1000.0000 XYZ', receiver, memo:
// eos.createToken('1000.0000 XXZX', acc1, 'new Token')

// ----OTHER----
//  converts '1.3000 EOS' --> 1.3, see floatRegex in eosj.js
// console.log('tofloat: ', eos.toFloat('1.03002000'))

// ----MAIN NET----
const config = {
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', // main net
  httpEndpoint: 'https://api.eosnewyork.io:443', // main net
  expireInSeconds: 60
}

const edgytesty311PrivateKey = '5JVjaFdWPtAdeWQBSAvh31R5HMnq2Qj7fbHdroQiSjCHrk4KFCC'
const eos = eosjs(config)

const main = async () => {

  // ///////////////////////////////////////////////////
  // Derive public key
  const publicKey = ecc.privateToPublic(edgytesty311PrivateKey)
  console.log(`publicKey: ${publicKey}`)

  // ///////////////////////////////////////////////////
  // Query for account name
  let accountName
  const accounts = await new Promise((resolve, reject) => {
    eos.getKeyAccounts(publicKey, (error, result) => {
      if (error) reject(error)
      resolve(result)
    })
  })
  if (accounts.account_names && accounts.account_names.length > 0) {
    accountName = accounts.account_names[0]
  }
  console.log(`accountName: ${accountName}`)

  // ///////////////////////////////////////////////////
  // Query for account balances
  const results = await eos.getCurrencyBalance('eosio.token', accountName)
  if (results && results.length > 0) {
    for (const r of results) {
      if (typeof r === 'string') {
        const balanceArray = r.split(' ')
        if (balanceArray.length === 2) {
          const exchangeAmount = balanceArray[0]
          const currencyCode = balanceArray[1]
          console.log(`exchangeAmount: ${exchangeAmount}`)
          console.log(`currencyCode: ${currencyCode}`)
        }
      }
    }
  }

  // See if account exists
  async function getAccSystemStats (account) {
    return new Promise((resolve, reject) => {
      eos.getAccount(account, (error, result) => {
        if (error) reject(error)
        resolve(result.total_resources)
      })
    })
  }
  const accountStats = await getAccSystemStats('edgytesty311')
  console.log(accountStats)

  // ///////////////////////////////////////////////////
  // Query account outgoing transactions
  const actions = await eos.getActions(accountName)
  console.log(actions)

  if (actions.actions && actions.actions.length > 0) {
    for (const action of actions.actions) {
      const date = action.block_time
      const blockNum = action.block_num
      const txid = action.action_trace.trx_id
      const name = action.action_trace.act.name
      console.log('------------------------------------------------')
      console.log(`Txid: ${txid}`)
      console.log(`Data ${date}`)
      console.log(`Block Number: ${blockNum}`)
      console.log(`Action type: ${name}`)
      if (name === 'transfer') {
        const { from, to, memo, quantity } = action.action_trace.act.data
        const split = quantity.split(' ')
        const [ exchangeAmount, currencyCode ] = split

        console.log(`From: ${from}`)
        console.log(`To: ${to}`)
        console.log(`Memo: ${memo}`)
        console.log(`Amount: ${exchangeAmount}`)
        console.log(`currencyCode: ${currencyCode}`)
      }
    }
  }

  // ///////////////////////////////////////////////////
  // Create an unsigned transaction
  const destinationAccount = 'edgytestey43'
  const unsignedTx = await eos.transaction({
    actions: [
      {
        account: 'eosio.token',
        name: 'transfer',
        authorization: [{
          actor: accountName,
          permission: 'active'
        }],
        data: {
          from: accountName,
          to: destinationAccount,
          quantity: '1.5000 EOS',
          memo: ''
        }
      }
    ]
  },
  {
    sign: false,
    broadcast: false
  })
  console.log(unsignedTx)

  // ///////////////////////////////////////////////////
  // Create a signed transaction
  const signedTx = await eos.transaction({
    actions: [
      {
        account: 'eosio.token',
        name: 'transfer',
        authorization: [{
          actor: accountName,
          permission: 'active'
        }],
        data: {
          from: accountName,
          to: destinationAccount,
          quantity: '1.5000 EOS',
          memo: ''
        }
      }
    ]
  },
  {
    sign: true,
    broadcast: false,
    keyProvider: [edgytesty311PrivateKey]
  })
  console.log(signedTx)

  // ///////////////////////////////////////////////////
  // Buy CPU and RAM
  const signedBuyBw = await eos.transaction(tr => {
    tr.delegatebw({
      from: accountName,
      receiver: 'edgytestey43',
      stake_net_quantity: '0.1000 EOS',
      stake_cpu_quantity: '0.1000 EOS',
      transfer: 0
    })
  },
  {
    sign: true,
    broadcast: true,
    keyProvider: [edgytesty311PrivateKey]
  })
  console.log(signedBuyBw)

  // ///////////////////////////////////////////////////
  // Create a signed transaction and broadcast
  const signedTxForBroadcast = await eos.transaction({
    actions: [
      {
        account: 'eosio.token',
        name: 'transfer',
        authorization: [{
          actor: accountName,
          permission: 'active'
        }],
        data: {
          from: accountName,
          to: destinationAccount,
          quantity: '0.2100 EOS',
          memo: ''
        }
      }
    ]
  },
  {
    sign: true,
    broadcast: true,
    keyProvider: [edgytesty311PrivateKey]
  })
  console.log(signedTxForBroadcast)
}

try {
  main()
} catch (e) {
  console.log(e)
}
