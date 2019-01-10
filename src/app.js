const express = require ('express');
const path=require('path');
const morgan = require ('morgan');
const mysql = require ('mysql');
const myConnection = require ('express-myconnection');
const app = express();
//settings
app.set('port',process.env.PORT || 5000);

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));


//middelwares
app.use(morgan('dev'));

app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'',
    port:'3306',
    database:'crud_node'
},'single'))

//es decir desde el modulo estamos requiriendo lo que venga del formulario solo nos va a enviar los camps de formulario
app.use(express.urlencoded({extended:false}));


//importando las rutas
const costumerRoutes = require('./routes/costumers');



//routas
app.use('/',costumerRoutes);

//statis files

app.use(express.static(path.join(__dirname,'public')));


//empezando el servidor
app.listen(app.get('port'),()=>{
console.log('server on port '+app.get('port'));
});