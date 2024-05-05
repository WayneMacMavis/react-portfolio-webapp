const express = require('express');
const bodyParser = require('body-parser');
const { Mailchimp } = require('@mailchimp/mailchimp_marketing');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

const mailchimp = new Mailchimp('7b76d719d6c7d58d71b270505e2121d1-us17');

app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    const response = await mailchimp.lists.addListMember('da1d7840b3', {
      email_address: email,
      status: 'subscribed'
    });

    console.log('Subscriber added:', response);
    res.status(200).json({ success: true, message: 'Subscription successful' });
  } catch (error) {
    console.error('Error adding subscriber:', error);
    res.status(500).json({ success: false, message: 'Failed to subscribe' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
