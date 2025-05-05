const express = require('express')
const app = express()

let htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        h1 {
            color: #333;
        }
    </style>
</head>
<body>
    <h1>Welcome to My Homepage</h1>
    <p>This is a simple homepage built with HTML.</p>
</body>
</html>
`;

app.get('/', (req, res) => {
  res.send(htmlContent)
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})