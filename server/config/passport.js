'use strict'
// config/passport.js

// load all the things we need
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

// load up the user model
const User = require('../models/user');

// expose this function to our app using module.exports
module.exports = function(passport) {
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
        done(err, user);
      });
    });

    passport.use(new FacebookStrategy({
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: 'http://localhost:8080/auth/facebook/return',
      profileFields: ["emails", "displayName"],
      passReqToCallback : true, // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    }, (req, token, refreshToken, profile, done) => {
      // asynchronous
      process.nextTick(() => {
        if (!req.user) {
          // find the user in the database based on their facebook id
          User.findOne({ 'facebook.id': profile.id }, (err, user) => {
            // if there is an error, stop everything and return that
            // ie an error connecting to the database
            if (err) return done(err);
            // if the user is found to have a facebook id, then log them in
            if (user) {
              return done(null, user);
            } else {
              // if there is no user found with that facebook id, create them
              let newUser = new User({
                isAdmin: false,
                facebook: {
                  email: profile.emails[0].value,
                  id: profile.id,
                  name: profile.displayName,
                  token,
                }
              });
              // set all of the facebook information in our user model

              // save our user to the database
              newUser.save((err) => {
                if (err) throw err;
                // if successful, return the new user
                return done(null, newUser);
              });
            }
          });
        } else {
          // user already exists and we want to link accounts
          let user = req.user;
          //if the user exists and doesn't have a facebook ID, add it to their account
          user.isAdmin = false;
          user.facebook.id = profile.id; // set the users facebook id                   
          user.facebook.token = token; // we will save the token that facebook provides to the user                    
          user.facebook.name = profile.displayName; // user name shown on facebook
          user.facebook.email = profile.emails[0].value || '';

          user.save((err) => {
            if (err) throw err;
            // add account to session for custom auth outside of passport
            return done(null, user);
          });
        }
      });
    }));
};
