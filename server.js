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
    try {
        const { amount } = req.body;

            const paymentIntent = await stripe.paymentIntents.create({
                  amount,
                        currency: 'usd',
                              payment_method_types: ['card'],
                                  });

                                      res.send({
                                            clientSecret: paymentIntent.client_secret,
                                                });
                                                  } catch (error) {
                                                      console.error('Stripe error:', error);
                                                          res.status(500).send({ error: 'Payment failed' });
                                                            }
                                                            });






  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });