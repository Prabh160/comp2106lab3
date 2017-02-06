var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 3', message: 'My Family' });
});

/*GET Harjit*/
router.get('/harjit', function(req,res,next){
  res.render('harjit');
});

/*GET Charanjit*/
router.get('/charanjit', function(req,res,next){
    res.render('charanjit');
});

/*GET Harsimran*/
router.get('/harsimran', function(req,res,next){
    res.render('harsimran');
});

/*GET Prabhjit*/
router.get('/prabhjit', function(req,res,next){
    res.render('prabhjit');
});

/*GET Jaskirat*/
router.get('/jaskirat', function(req,res,next){
    res.render('jaskirat');
});

module.exports = router;
