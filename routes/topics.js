const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/:id', async (req, res) => {
  const topic = await prisma.topic.findUnique({
    where: { id: req.params.id }
  })
  res.json(topic)
})

router.delete('/:id', async (req, res) => {
  const topic = await prisma.topic.delete({
    where: { id: req.params.id }
  })
  res.json(topic)
})

module.exports = router;
