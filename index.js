// require module
var connect = require('connect')
 
// create app
var app = connect()


function hellowrld(req,res,next){

res.setHeader('Content-Type','text/plain',);
res.end('hello wrld!');



app.use(hellowrld);
app.listen(3000);



console.log("severs running on local host. ");
}