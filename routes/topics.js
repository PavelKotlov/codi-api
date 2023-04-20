const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const {
  getTotalCards,
  getNewCards,
  getLearningCards,
  getMatureCards,
  getGraduatedCards,
  getReviewsByDate,
  getCardsCountGroupedByEaseFactor,
} = require('../db/stats');
const prisma = new PrismaClient();

//TODO: ONE PERSON AT A TIME ! Match router pattern with Juliana's
router.get('/:id', async (req, res) => {
  const topic = await prisma.topic.findUnique({
    where: { id: req.params.id },
  });
  res.json(topic);
});

//TODO: Refactor
router.get('/:id/stats', async (req, res) => {
  const total = await getTotalCards(req.params.id);
  const newCards = await getNewCards(req.params.id);
  const learning = await getLearningCards(req.params.id);
  const mature = await getMatureCards(req.params.id);
  const graduated = await getGraduatedCards(req.params.id);
  const reviews = await getReviewsByDate(req.params.id);
  const ease = await getCardsCountGroupedByEaseFactor(req.params.id);
  const result = {
    cardsStats: {
      total,
      new: newCards,
      learning,
      graduated,
      mature,
    },
    ease,
    reviews,
  };
  res.json(result);
});

router.delete('/:id', async (req, res) => {
  const topic = await prisma.topic.delete({
    where: { id: req.params.id },
  });
  res.json(topic);
});

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

/* update topic */
router.patch('/:id', async (req, res) => {
  const { name, image_url, max_cards } = req.body;

  try {
    const updatedTopic = await prisma.topic.update({
      where: { id: req.params.id },
      data: {
        name,
        image_url,
        max_cards,
      },
    });
    res.status(200).json(updatedTopic);
  } catch (e) {
    console.log(e.message);
    res.status(500).json('Internal server error');
  }
});

module.exports = router;
