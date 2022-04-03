exports.cors = {
    origin: "*"
};

const environment = process.env.environment || "local";

const portApp = process.env.PORT_APP || 9000
const portReact = process.env.PORT_APP_REACT || 9001

const connection = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.MYSQL_HOST || 'localhost',
        port: process.env.MYSQL_PORT || 3306,
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || 'root',
        database: process.env.MYSQL_DATABASE || 'managementBooks',
        options: {
            cryptoCredentialsDetails: {
                minVersion: 'TLSv1'
            },
            "enableArithAbort": true
        }
    },
    migrations: {
        directory: './migrations',
        tableName: 'migrations',
    },
    seeds: {
        directory: './seeds',
    },
});

const configKeySecret = {
    accessTokenSecret: "access-secret-manage-books-vodinhnghia95-green-cats-and-dogs-a@",
    accessTokenLife: "24h",
    refreshTokenLife: "3650d",
    refreshTokenSecret: "refresh-token-secret-manage-books-vodinhnghia95-green-cat2-dogs-a@1"
}

module.exports = {
    connection,
    portApp,
    portReact,
    configKeySecret,
    environment
}