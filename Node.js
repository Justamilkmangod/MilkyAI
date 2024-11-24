```javascript
const https = require('https');

api.get('AIzaSyBpmyCVYng1k7A3ZuMbOFbnG9B9oyfIfoE', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
```  
