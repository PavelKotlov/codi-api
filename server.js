const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

// express Configuration
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

const topicsRoutes = require("./routes/topics");
const cardsRoutes = require("./routes/cards");
const userRoutes = require("./routes/user");

app.use("/api/topics", topicsRoutes);
app.use("/api/topics", cardsRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, "0.0.0.0", () => {
  // eslint-disable-next-line no-console
  console.log(
    `express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
