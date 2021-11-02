const express = require('express');
const dotenv =  require('dotenv');
const cors =  require('cors');
const morgan =  require('morgan');
const responseTime = require('response-time');

const characters =  require('./routers/character');

dotenv.config();

const app  = express();
const port =  process.env.PORT || 3000;

/*Middlewares*/
app.use(cors());  
app.use(morgan('dev'));
app.use(responseTime());


/**Routers */
app.use('/api/chapters', characters);


/*get up the server */
app.listen(port, () => {
     console.log('listening on port ' + port);
});



/**
 *  endponts 
    {
    "characters": "https://rickandmortyapi.com/api/character",
    "locations": "https://rickandmortyapi.com/api/location",
    "episodes": "https://rickandmortyapi.com/api/episode"
    }
 * 
 */