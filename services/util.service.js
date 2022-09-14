const { to } = require('await-to-js')
const pe = require('parse-error')
const CONFIG = require('../config/config')
//const { getClient, getRedisKey } = require('./redis.service')

module.exports.to = async (promise) => {
  let err, res;
  [err, res] = await to(promise)
  if (err) return [pe(err)]

  return [null, res]
}

module.exports.ReE = function (res, err, code, customCode, context) {

  if (!err) {
    err = {
      message: "Error desconocido"
    }
  }

  // Error Web Response
  if (typeof err == 'object' && typeof err.message != 'undefined') {
    err = err.message
  }

  if (typeof code !== 'undefined') res.statusCode = code

  return res.json({
    apiVersion: CONFIG.api_version,
    context: context,
    success: false,
    environment: CONFIG.environment,
    error: { code: customCode, message: err },
  })
}

module.exports.ReSCache = async function ({res, redisKey}) {
  try{
    const cacheResponse = await getRedisKey(redisKey)
    cacheResponse.loadedByRedis = true
    if(cacheResponse){
      return ReS(res, cacheResponse)
    }
  } catch (error) {
    // go on
  }
  return null
}

const ReS = (res, data, props, context) => {
  // Success Web Response
  let send_data = {
    headers: res.headers,
    apiVersion: CONFIG.api_version,
    success: true,
    context: context,
    environment: CONFIG.environment,
  }

  if (typeof data == 'object') {
    send_data = Object.assign(send_data, data) //merge the objects
  }
  // Retrocompatibility
  if(props){
    if(typeof props == 'number'){
      res.statusCode = props
    }
    else{
      if(props.code){
        res.statusCode = props.code
      }
      if(props.redisKey){
        const redisTTL = props.redisTTL ? props.redisTTL : 86400000 // a day by default
        let newDateTTL = Date.now()
        newDateTTL += redisTTL
        const dateTTL = new Date(newDateTTL)
        getClient().set(props.redisKey, JSON.stringify( {data, vigencyUntil: dateTTL} ))
      }
    }
  }

  return res.json(send_data)
}

module.exports.ReS = ReS 

module.exports.TE = TE = function (err_message, log) {
  // TE stands for Throw Error
  if (log === true) {
    //console.error(err_message);
  }

  throw new Error(err_message)
}



/**
 * Function to decrypt code in deeplink
 *
 * @input string code: string a desencriptar
 *
 * @return int: entero con el numero de cliente
 */
module.exports.decryptDeeplinkCode = decryptDeeplinkCode = function (code = '') {
  code = code.replace('.', '+')
  code = code.replace('_', '/')
  code = code.replace('-', '=')
  let buff = new Buffer(code, 'base64')
  let text = buff.toString('ascii')

  return text
}

module.exports.encryptDeeplinkCode = encryptDeeplinkCode = function (code = '') {
  let buff = new Buffer(code)
  let base64data = buff.toString('base64')
  base64data = base64data.replace('+', '.')
  base64data = base64data.replace('/', '_')
  base64data = base64data.replace('=', '-')

  return base64data
}