import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Servidor Express online e funcionando!");
});

export default router;