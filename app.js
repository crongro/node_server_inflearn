var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var main = require('./router/main')
var email = require('./router/email')


app.listen(3000, function() {
	console.log("start, express server on port 3000");
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

app.use('/main', main)
app.use('/email', email)

//url routing
app.get('/', function(req,res) {
	console.log('test');
	//res.send("<h1>hi !!! send data</h1>")
	res.sendFile(__dirname + '/public/main.html')
});
























