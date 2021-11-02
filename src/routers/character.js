/* 
 *  Endpoint : 'api/chapters' 
 */

const dotenv = require('dotenv');
const axios = require('axios');
const { Router } =  require('express');
const {setAsync ,  getAsync} = require('../cache/cliente');

dotenv.config();

const Api =   process.env.API_RM_CHAPTERS;

const router  = Router();

router.get('/',async(req  , res ) => {
    
    try {
        
        const cache = await getAsync('character');
        if(cache){
            return res.status(200).json({ 
                data: JSON.parse(cache),
            })
        }

        const response = await axios.get(Api);
        await setAsync('character', JSON.stringify(response.data)); 
        return res.status(200).json({
            data: response.data,
        })  
        
    } catch (error) {
        console.log(error);
        return res.status(500).send('API FALLED, REPORT THE PROBLEM');
    }

});



module.exports = router;