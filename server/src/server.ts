import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).send([{ id: "1" }, { id: "1" }, { id: "3" }]);
});

app.listen(3333);
