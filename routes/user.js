const express = require('express');
const router = express.Router();

const { checkJwt } = require('../helpers/auth');

router.get('/authorized', checkJwt, async (req, res) => {
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
});

module.exports = router;
