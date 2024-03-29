const express = require ('express');
const redis = require ('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server',  //it comes from docker-compose.yaml. it is redis container or service
    port :6379
});
client.set ('visits',1);

app.get('/', (req, res)=>{
    client.get('visits', (err,visits)=> {
        res.send('Number of visits: '+ visits);
        client.set('visits', parseInt(visits) + 1);
    })
});

app.listen(8081, ()=> console.log('Listening on port  4001'));