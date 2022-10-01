const express = require("express");

const app = express();
const PORT = 3000;

// Greetings
app.get("/greeting/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Wow! Hello there,   ${name} `);
});

// Tip Calculator
app.get("/tip/:total/:tipPercentage", (req, res) => {
  const { tipPercentage, total } = req.params;
  res.send(`${tipPercentage}`);
});

// Magic 8 Ball
let MagicArray = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/magic/:MagicQuestion", (req, res) => {
  const { MagicQuestion } = req.params;
  // for ( let arr of MagicArray){
  //   console.log(arr);
  //}

  res.send(`${MagicQuestion} 
<h1>${MagicArray[Math.floor(Math.random() * MagicArray.length)]} <h1/>`);
});

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
