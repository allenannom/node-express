// Import packages
const express = require("express");
const cors = require('cors');
const home = require("./routes/home");
const openaiChat = require("./routes/openaiChat");
// Middlewares
const app = express();
app.use(express.json());

var corsOptions = {
  origin: 'https://chat.legal-quant.com', // or use '*' to allow all origins
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Routes
app.use("/home", home);
app.use("/openaiChat", openaiChat);
// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
