const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome!" });
});

const db = require('./models');
db.sequelize.authenticate().then(() => {
  console.log("Connected to SMTTerms.")
}).catch(err => {
  console.log("Unable to connect", err);
});

require("./routes/routes")(app);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});