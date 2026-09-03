const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Server is running');
});
app.get("/products", (req, res) => {
  res.status(200).json([
    { id: 1, name: "Product 1", price: 10.0 },
    { id: 2, name: "Product 2", price: 20.0 },
    { id: 3, name: "Product 3", price: 30.0 },
  ]);
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;  // export for testing
