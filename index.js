const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');
const axios = require('axios');

const app = express();

const PORT = 3005;

const limiter = rateLimit({
	windowMs: 2 * 60 * 1000,
	max: 5, 
})

app.use(morgan('combined'));  //git details of api hit i.e logs
app.use(limiter);             //limit the api hit url in provided time
app.use('/bookingservice', async (req, res, next) => {
    console.log(req.headers['x-access-token']);
    try {
        const response = await axios.get('http://localhost:3001/api/v1/isauthenticated', {
            headers: {
                'x-access-token': req.headers['x-access-token']
            }
        });
        console.log(response.data);
        if(response.data.success) {
            next();
        } else {
            return res.status(401).json({
                message: 'Unauthorised'
            })
        }
    } catch (error) {
        return res.status(401).json({
            message: 'Unauthorised'
        })
    }
})

//proxy middleware helps us to  make request from different server and send it as a normal request to our server
//if we want to hit req to  port 3002  we can hit through port 3005 . It from single port we can hit different port
//if authenticated(signin done) then token is gerated then we can put the token to get /info or for

app.use('/bookingservice', createProxyMiddleware({ target: 'http://localhost:3002/', changeOrigin: true}));

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});