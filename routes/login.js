const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  //TODO: Gotta make sure this is the corret redirect
  res.redirect('/codi-app.us.auth0.com');
})

module.exports = router;
