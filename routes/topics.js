const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/:id', async (req, res) => {
  const topic = await prisma.topic.findUnique({
    where: { id: req.params.id },
  });
  res.json(topic);
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

module.exports = router;
