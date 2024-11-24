```javascript
const https = require('https');

https.get('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap', (resp) => {
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