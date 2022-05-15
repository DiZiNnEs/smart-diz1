import express from "express";
import bodyParser from "body-parser";


import { router } from "./api-routes/routes";
import { telegramBot } from "./bot/telegram/telegramBot";
import { startTraining } from "./services/nlp/nlp";

const PORT = 3000;
const app = express();


app.use(router);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(PORT, async () => {
  await startTraining();
  console.log("Started");
});

telegramBot.launch();

