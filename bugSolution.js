```javascript
// pages/api/hello.js
export default async function handler(req, res) {
  // Check if the request is a POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Parse the request body
    const data = await req.json();

    // Check if required fields exist
    if (!data || !data.name) {
      return res.status(400).json({ message: 'Missing required field: name' });
    }

    const { name } = data; 
    // ... (rest of your code) ...
    return res.status(200).json({ message: `Hello ${name}` });
  } catch (error) {
    console.error('Error processing request:', error);
    return res.status(400).json({ message: 'Bad Request' });
  }
} 
```