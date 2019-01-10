const controller={};

controller.list=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM  customer',(err,customers)=>{
            if(err){
                res.json(err);
            }
            
            res.render('customers',{
                data:customers
            });
        });
    });
}
 controller.save=(req,res)=>{
    
    /*esto es solo para hacer la prueba de nuestros envios a nuestro servidor
     console.log(req.body);
    res.send('estoy ahi xD ');*/
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO CUSTOMER SET ?',data,(err,customer)=>{
            console.log(customer);
            res.redirect('/');
        })
    })
 }
 //editar
controller.edit = (req,res)=>{
    const {id} = req.params;

    req.getConnection((err,conn)=>{
        conn.query("select * from customer where id = ?" ,[id],(err,rows)=>{
            console.log(rows);
            res.render('update',{
                data :rows[0]
            });
        });
    });
}

controller.update = (req,res) => {
    const { id } = req.params;
    const newsCustomer = req.body;
    req.getConnection((err,conn)=>{

        conn.query('UPDATE customers set ? where id = ?',[newsCustomer,id],(err,rows)=>{
            res.redirect('/');
        });
    });
};
controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
  
      conn.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
        res.redirect('/');
      });
    });
  };


 //eliminar
 controller.delete=(req,res)=>{
     //recibiendo los datos del ID
    const {id} = req.params;

    
    req.getConnection((err,conn)=>{
        conn.query("DELETE FROM CUSTOMER where id =?" ,[id],(err,rows)=>{
            res.redirect('/');
        })
    })
   
 }




module.exports = controller;