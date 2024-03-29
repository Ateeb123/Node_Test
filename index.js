'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express().use(bodyParser.json()); ;


app.listen(process.env.PORT || 1337, ()=> console.log('WebHook is listening'));

// Creates the endpoint for our webhook 
app.post('/webhook', (req, res) => {  

    let body = req.body;
    console.log(body);
  
    // Checks this is an event from a page subscription
    if (body.object === 'page') {
  
      // Iterates over each entry - there may be multiple if batched
      body.entry.forEach(function(entry) {
  
        // Gets the message. entry.messaging is an array, but 
        // will only ever contain one message, so we get index 0
        let webhook_event = entry.messaging[0];
        console.log(webhook_event);
      });
  
      // Returns a '200 OK' response to all requests
      res.status(200).send('EVENT_RECEIVED');
    } else {
      // Returns a '404 Not Found' if event is not from a page subscription
      res.sendStatus(404);
    }
  
  });
  

  app.get('/webhook', (req, res) => {

    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = "123456789001";

      
    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];
      
    // Checks if a token and mode is in the query string of the request
    if (mode && token) {
    
      // Checks the mode and token sent is correct
      if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        
        // Responds with the    token from the request
        console.log('WEBHOOK_VERIFIED');
        res.status(200).send(challenge);
      
      } else {
        // Responds with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403);      
      }
    }
  });




  app.post('/webhook2', (req, res) => {

    // Your verify token. Should be a random string.

    let bodyy = req.body;
//     console.log(bodyy);
  
//     console.log('CHECK');
//     console.log('CHECK');
//     console.log('CHECK');

//     console.log('CHECK');
    
//     console.log(bodyy.queryResult.fulfillmentMessages);
//     console.log(bodyy.queryResult.fulfillmentMessages[0].payload.facebook.attachment);
    console.log(bodyy.queryResult.fulfillmentMessages[0]); 
    console.log(bodyy.queryResult.fulfillmentMessages[0].payload);
    console.log(bodyy.queryResult.fulfillmentMessages[0].payload.facebook);
    console.log(bodyy.queryResult.fulfillmentMessages[0].payload.facebook.attachment);
    console.log(bodyy.queryResult.fulfillmentMessages[0].payload.facebook.attachment.payload);
  
    console.log('CHECK');
    console.log('CHECK');
    console.log('CHECK');

    console.log('CHECK');
    console.log(req.body);
      
        
    console.log('CHECK');
    console.log('CHECK');
    console.log('CHECK');

    console.log('CHECK');
    res.send({ 'hello_1': 'world' });

  });




