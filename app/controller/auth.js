// const jwtHelper = require("../helper/jwt.Helper");

// const accessTokenLife = process.env.ACCESS_TOKEN_LIFE || ConfigKeySecret.accessTokenLife;
// const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || ConfigKeySecret.accessTokenSecret;
// const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE || ConfigKeySecret.refreshTokenLife;
// const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || ConfigKeySecret.refreshTokenSecret;

let login = async(req, res) => {
    return res.status(200).json({
        status: true,
        code: 0,
        data: []
    });
}

let register = async(req, res) => {
    return res.status(200).json({
        status: true,
        code: 0,
        data: []
    });
}


module.exports = {
    login,
    register
}