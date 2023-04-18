const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Start a study session (quiz)
// Give priority to cards due today , then older cards, then learning then new
// Limit to the max_cards in the topic
router.get('/:id/cards/quiz', async (req, res) => {
  const topic = await prisma.topic.findUnique({
    where: { id: req.params.id },
    select: { max_cards: true },
  });

  const cards = await prisma.card.findMany({
    orderBy: [{ status: 'desc' }, { due_at: 'desc' }],
    where: {
      topicId: req.params.id,
      OR: [
        { due_at: null },
        {
          due_at: {
            lte: new Date(),
          },
        },
      ],
    },
    take: topic.max_cards,
  });

  res.json(cards);
});

router.get('/:id/cards/:card_id', async (req, res) => {
  const card = await prisma.card.findUnique({
    where: { id: req.params.card_id },
  });
  res.json(card);
});

router.delete('/:id/cards/:card_id', async (req, res) => {
  const card = await prisma.card.delete({
    where: { id: req.params.card_id },
  });
  res.json(card);
});

// Browse Cards
router.get('/:id/cards', (req, res) => {
  prisma.card
    .findMany({
      where: {
        topicId: req.params.id,
      },
    })
    .then((data) => {
      res.json(data);
    });
});

module.exports = router;
