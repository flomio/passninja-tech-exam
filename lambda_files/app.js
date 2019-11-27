const serverless = require('serverless-http');
const express = require('express');
const bitcoin = require('bitcoinjs-lib')
const app = express();
const cors = require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    const keyPair = bitcoin.ECPair.makeRandom()
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey })
    const publicKey = keyPair.publicKey.toString('hex')
    const privateKey = keyPair.toWIF()
    res.json({ address, privateKey, publicKey })
})

app.get('/api/info', (req, res) => {
    res.send({ application: 'ninjapass-backend', version: '1' });
});

module.exports = {
    handler: serverless(app),
    app
}