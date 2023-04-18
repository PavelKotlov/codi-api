const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/:id/cards/:card_id", async (req, res) => {
  const card = await prisma.card.findUnique({
    where: { id: req.params.card_id },
  });
  res.json(card);
});

router.delete("/:id/cards/:card_id", async (req, res) => {
  const card = await prisma.card.delete({
    where: { id: req.params.card_id },
  });
  res.json(card);
});

module.exports = router;
