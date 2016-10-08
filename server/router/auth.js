const express = require('express');
const router = express.Router();

module.exports = (app, passport) => {
  // =====================================
  // FACEBOOK ROUTES =====================
  // =====================================
  // route for facebook authentication and login
  app.get('/auth/login/facebook', passport.authenticate('facebook', { scope : 'email' }));

  // handle the callback after facebook has authenticated the user
  app.get('/auth/facebook/return',
    passport.authenticate('facebook', {
      successRedirect: 'localhost:3000/',
      failureRedirect: 'localhost:3000/',
    }));

  app.get('/auth/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};
