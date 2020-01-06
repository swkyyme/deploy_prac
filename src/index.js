require("dotenv").config(); //the ealier the better, usually at the very beginnig

const express = require("express");
const helmet = require("helmet");
const morgan = require('morgan');
const cors =  require("cors");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

app.use(express.json()); //middleware

app.use(helmet());
app.use(morgan("common"));
app.use(cors());

app.use('/v1', routes);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

