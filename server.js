const express = require('express');
const App = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const PORT = 3000;

// express Configuration
App.use(morgan('dev'));
App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());

App.use(express.static('public'));
App.use(methodOverride('_method'))


const topicsRoutes = require('./routes/topics');
const cardsRoutes = require('./routes/cards');
const usersRoutes = require('./routes/users');
const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout');
const signupRoutes = require('./routes/signup');

app.use('/topics', topicsRoutes);
app.use('/topics/:id/cards', cardsRoutes);
app.use('/users', usersRoutes);
app.use('/login', loginRoutes);
app.use('/logout', logoutRoutes);
app.use('/signup', signupRoutes);

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
