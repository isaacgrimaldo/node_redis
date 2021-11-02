const {promisify} =  require('util');

const redis =  require('redis');
const client  =  redis.createClient({
    host:'127.0.0.1',
    port:6379,
})

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);


module.exports = {
     getAsync,
     setAsync
} 