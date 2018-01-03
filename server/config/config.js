let env = process.env.NODE_ENV || 'development';

if ( env === 'development' || env === 'test' ){
    let config = require('./config.json');
    let configEnv = config[env];

    Object.keys(configEnv).forEach((key) => {
        process.env[key] = configEnv[key];
    });

}

//if ( env === 'development' ){
//    process.env.PORT = 3002;
//    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
//} else if ( env === 'test' ){
//    process.env.PORT = 6000;
//    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
//}