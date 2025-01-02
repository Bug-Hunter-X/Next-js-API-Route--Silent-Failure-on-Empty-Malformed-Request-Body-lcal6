```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // Check if the request is a POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Access the data from the request body
  try {
    const { name } = req.body; 
    // ... (rest of your code) ... 
  } catch (error) {
    console.error('Error accessing request body:', error);
    return res.status(400).json({ message: 'Bad Request' });
  }
} 
```