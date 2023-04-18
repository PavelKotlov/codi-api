const express = require('express');
const App = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require("helmet");
const cors  = require("cors");
const PORT = 8080;

// express Configuration
App.use(cors());
App.use(helmet());
App.use(morgan('dev'));

App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());
App.use(express.static('public'));

const topicsRoutes = require('./routes/topics');
const cardsRoutes = require('./routes/cards');
const usersRoutes = require('./routes/users');
const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout');
const signupRoutes = require('./routes/signup');

App.use('/api/topics', topicsRoutes);
App.use('/api/topics', cardsRoutes);
App.use('/api/users', usersRoutes);
App.use('/api/login', loginRoutes);
App.use('/api/logout', logoutRoutes);
App.use('/api/signup', signupRoutes);

// Sample GET route
App.get('/api/data', (req, res) =>
  res.json({
    message: 'Seems to work!',
  })
);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
