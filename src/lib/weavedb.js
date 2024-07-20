// lib/weavedb.js
import WeaveDB from "weavedb-sdk";

const db = new WeaveDB({
  wallet: process.env.NEXT_PUBLIC_WALLET_ADDRESS , 
  contractTxId: process.env.NEXT_PUBLIC_WEAVE_DB_TX_ID 
});

export default db;
