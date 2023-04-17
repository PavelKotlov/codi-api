const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//TODO: Delete me - Example of using Prisma
router.get('/', (req, res) => {
  prisma.topic.findMany().then((data) => {
    res.json(data);
  });
});

module.exports = router;
