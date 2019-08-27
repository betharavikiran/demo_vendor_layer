function loginCall(config, loginID, password)  {
    console.log("in Login Call");
    console.log(config);
    console.log(loginID);
    console.log(password);
}


function getVendorInterface(env, loginId, password){
    loginCall(env, loginId,password);
    return "vendor interface" + env+ loginId + password;
}

module.exports = getVendorInterface;
