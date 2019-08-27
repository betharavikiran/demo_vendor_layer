const loginCall = require('./src/methods/loginCall')

function getVendorInterface(env, loginId, password){
    loginCall(env, loginId,password);
    return "vendor interface" + env+ loginId + password;
}

module.exports = getVendorInterface;
