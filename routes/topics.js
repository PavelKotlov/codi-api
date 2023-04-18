const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//TODO: change userId to logged in user or see how will front end send it
router.get('/', (req, res) => {
  prisma.topic
    .findMany({
      where: {
        userId: 'f1bdf45e-1b1c-11ec-9621-0242ac130002',
      },
    })
    .then((data) => {
      res.json(data);
    });
});

router.post('/', (req, res) => {
  const body = req.body;
  const data = {
    ...body,
    created_at: new Date(body.created_at),
    updated_at: new Date(body.updated_at),
  };
  prisma.topic.create({ data }).then(() => {
    res.status(201).json({ message: 'Created Successfully' });
  });
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

module.exports = router;
