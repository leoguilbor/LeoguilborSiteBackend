export const enviroment = {
    server:{port: process.env.SERVER_PORT || 8080},
    db:{url: process.env.DB_URL || 'mongodb://localhost/LeoguilborSite'}
}