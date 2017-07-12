const md5 = require('blueimp-md5')

const privKey = 'Your Private Key'
const pubKey = 'Your Public Key'
const timestamp = Date.now()

const digest = `${timestamp}${privKey}${pubKey}`

const hash = md5(digest)

export { pubKey, timestamp, hash }
