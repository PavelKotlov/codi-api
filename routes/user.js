const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { checkJwt } = require('../helpers/auth');

router.get('/authorized', checkJwt, async (req, res) => {
  console.log('YOu GOT IT', req.auth.payload.sub);

  const user = await prisma.user.findUnique({
    where: {
      id: req.auth.payload.sub,
    },
  });
  if (user) {
    res.status(200);
  } else {
    await prisma.user.create({
      data: {
        id: req.auth.payload.sub,
      },
    });
    res.status(201);
  }

  console.log(res);
});

module.exports = router;
