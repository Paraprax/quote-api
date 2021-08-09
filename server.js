const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

//routes:
app.get("/api/quotes/random", (req, res, next) => {
  const randomQ = getRandomElement(quotes);
  res.send({
    quote: randomQ,
  });
});

app.get("/api/quotes", (req, res, next) => {
  //   if (req.query == false) {
  //     res.send(quotes);
  //   } else if (req.query.person) {
  //     const personQarray = [];
  //     for (var i = 0; i < quotes.length; i++) {
  //       if (quotes.author == req.query.person) {
  //         personQarray.push(quotes.author);
  //       }
  //     }
  //     res.send(personQarray);
  res.send(quotes);
});

//listener:
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}....`);
});
