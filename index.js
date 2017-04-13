// Load dependencies
var express = require('express');
var app = express();
//var bodyParser = require('body-parser');


// Body Parser
app.use(express.static(__dirname + '/client'));
//app.use(bodyParser());

// Express send HTML
/*app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/view.html');
});*/

// REST api
/*app.get('/api/object', crudController.list); //get

app.get('/api/object/:id', crudController.getId); //get by id

app.put('/api/object/:id', (req, res) => { // update
	var id = req.params.id;
	var crud = req.body;
	Crud.update(id, crud, {}, (err, crud) => {
		if(err){
			throw err;
		}
		res.json(crud);
    console.log(crud);
	});
});

app.post('/api/object', crudController.create); //post

//app.delete('/api/object/:id', crudController.removeIt);*/


app.listen(3000, function () {  //localhost:3000
  console.log('Example app listening on port 3000!')
});
