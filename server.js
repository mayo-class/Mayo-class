const express = require('express');
const cors = require('cors');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Mayo Executive Health backend is running.');
  });

  app.post('/create-payment-intent', async (req, res) => {
    const { plan } = req.body;

      let amount;
        if (plan === 'basic') amount = 100000; // in cents
          else if (plan === 'premium') amount = 500000;
            else return res.status(400).send({ error: 'Invalid plan selected' });

              try {
                  const paymentIntent = await stripe.paymentIntents.create({
                        amount,
                              currency: 'usd'
                                  });

                                      res.send({ clientSecret: paymentIntent.client_secret });
                                        } catch (err) {
                                            res.status(500).send({ error: err.message });
                                              }
                                              });

                                              app.listen(PORT, () => {
                                                console.log(`Server is running on port ${PORT}`);
                                                });



      
              
                     
                         
                                 

                                     
                                            
                                               
                                               
                                                 
                                    
                                                      
                












































  