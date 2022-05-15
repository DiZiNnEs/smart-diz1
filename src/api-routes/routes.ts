import express from "express";
import { getAnswer, startTraining } from "../services/nlp/nlp";

export const router = express.Router();

router.post("/api/v1/getAnswer/", async (req: express.Request, res: express.Response) => {
  const question = req.body.question;
  const answer = await getAnswer(question);
  return res.status(200).json({ message: answer });
});

router.get("/api/v1/training/", async (req: express.Request, res: express.Response) => {
  try {
    await startTraining();
    return res.status(200).json({ message: "success" });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});
