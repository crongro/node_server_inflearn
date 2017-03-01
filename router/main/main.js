var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')

router.get('/', function(req,res) {
	console.log('main js loaded', req.user)
	var id = req.user;
	//res.sendFile(path.join(__dirname, '../../public/main.html'))
	res.render('main.ejs', {'id' : id});
});

module.exports = router;