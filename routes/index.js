var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Muslim Car Pool' });
});

router.get('/register', function(req, res) {
  res.render('register', { title: 'Register' });
});

router.post('/adduser', function(req, res) {
  var newUser = new User(
    {
      name: req.body.name,
      username: req.body.username,
      currentLocation: { lat: req.body.lat, long: req.body.long }
    });
    
    console.log('test');
        
    newUser.save(function(err) {
      if (err)
      {
        console.log("Error Saving!");
      }
      
      res.send(newUser);
    });
});

router.get('/getuser', function(req, res) {
  console.log(req.param("id"));
  User.findById(req.param("id"), function(err, user) {
    if (err)
    {
      console.log("Error finding user");
    }
    
    console.log(user);
    res.send(user);
  });
});

module.exports = router;
