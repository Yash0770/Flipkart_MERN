const paytmchecksum = require('../paytm/PaytmChecksum.js');
const { paytmMerchantKey, paytmParams } = require('../index.js');
const https = require('https');

// const addPaymentGateway = async (request, response) => {
//     try {
//         const paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);
//         const params = {
//             ...paytmParams,
//             'CHECKSUMHASH': paytmCheckSum
//         };
//         response.json(params);
//     } catch (error) {
//         console.error('Error in addPaymentGateway:', error);
//         response.status(500).json({ error: 'Internal server error' });
//     }
// };
const addPaymentGateway = async (request, response) => {
    try {
        if (!paytmParams || !paytmMerchantKey) {
            throw new Error('Paytm parameters or merchant key is missing');
        }
        
        const paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);

        if (!paytmCheckSum) {
            throw new Error('Failed to generate checksum');
        }

        const params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmCheckSum
        };

        response.json(params);
    } catch (error) {
        console.error('Error in addPaymentGateway:', error);
        response.status(500).json({ error: 'Internal server error' });
    }
};


const paytmResponse = async (request, response) => {
    try {
        const paytmCheckSum = request.body.CHECKSUMHASH;
        delete request.body.CHECKSUMHASH;

        const isVerifySignature = paytmchecksum.verifySignature(request.body, paytmMerchantKey, paytmCheckSum);

        if (isVerifySignature) {
            const paytmParams = {
                'MID': request.body.MID,
                'ORDERID': request.body.ORDERID
            };

            const checksum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);
            paytmParams['CHECKSUMHASH'] = checksum;

            const post_data = JSON.stringify(paytmParams);

            const options = {
                hostname: 'securegw-stage.paytm.in',
                port: 443, // Correct port for HTTPS
                path: '/order/status',
                method: 'POST', // Method should be POST for status check
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                }
            };

            let result = '';

            const post_req = https.request(options, (post_res) => {
                post_res.on('data', (chunk) => {
                    result += chunk;
                });

                post_res.on('end', () => {
                    const parsedResult = JSON.parse(result);
                    // Handle the result as needed
                    response.redirect('http://localhost:3000/'); // Redirect to frontend
                });
            });

            post_req.on('error', (e) => {
                console.error('Problem with request:', e.message);
                response.status(500).json({ error: 'Internal server error' });
            });

            post_req.write(post_data);
            post_req.end();
        } else {
            console.log('Checksum mismatched');
            response.status(400).json({ error: 'Checksum mismatched' });
        }
    } catch (error) {
        console.error('Error in paytmResponse:', error);
        response.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { addPaymentGateway, paytmResponse };
