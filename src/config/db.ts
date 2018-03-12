const config = {
    DB: {
        mongo: {
            uri: "mongodb://localhost:27017/rank",
            options: {
                useMongoClient: true,
                user: "",
                pass: ""
            }
        },
        // redis 配置
        redis: {
            host: "127.0.0.1",
            port: 6379,
            password: ""
        }
    }
};

export default config;