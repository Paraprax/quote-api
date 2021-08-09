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
  if (req.query.person) {
    let responseArr = [];
    for (var i = 0; i < quotes.length; i++) {
      if (quotes[i].person == req.query.person) {
        responseArr.push(quotes[i]);
      }
    }
    res.send(responseArr);
  } else {
    res.send(quotes);
  }
});

app.post("/api/quotes", (req, res, next) => {
  //requires a quote and author from the query string:
  const newQ = {};
  newQ.quote = req.query.quote;
  newQ.person = req.query.person;
  quotes.push(newQ);
  res.send(newQ);
  // res.status(201).send();
});

//listener:
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}....`);
});
