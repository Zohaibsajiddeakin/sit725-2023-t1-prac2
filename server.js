const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;

  if (!num1 || !num2) {
    return res.status(400).json({ error: 'Please provide both numbers.' });
  }

  const number1 = parseInt(num1);
  const number2 = parseInt(num2);

  if (isNaN(number1) || isNaN(number2)) {
    return res.status(400).json({ error: 'Invalid numbers provided.' });
  }

  const result = number1 + number2;

  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
