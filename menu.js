const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');
require('babel-register');


const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    database: 'nodejs',
    user: 'root',
    password: ''
})
db.connect((err) =>{
    if(err) console.log(err.message)
    
    else
    {
         
        
        
        
            app.use(express.static('views'));
            app.set('view engine','ejs')
             app.get('/',(req,res) =>{
                res.render('index')  
             })
             

            app.get('/contact',(req,res) =>{
                res.render('contact')
                if(req.query.nom && req.query.mail && req.query.message){   

            var nom = req.query.nom
            var mail = req.query.mail
            var message = req.query.message
            console.log('connexion etablie')
            db.query("INSERT INTO  pizza(pseudo,email,message)VALUES(?,?,?)",[nom,mail,message],(err,result) =>{
                if(err)
                {
                    console.log(err.message)

                }
                else
                {
                    console.log('envoyer')
                }
            })
                }
                else
                {

                     console.log('champs vide!!')
                }
            })
        
        
        
        
       app.get('/liste',(req,res) =>{
//                res.render('liste')

                db.query('SELECT * FROM pizza',(err,result) =>{
                if(err)
                {
                     console.log(err.message)

                } else
                    {
                        res.render('liste',{
                            nom:result
                        })
                       console.log(result)

                    }
                  })
                   }) 
        
        
        
        
        
    }
})
        
app.listen(7070, (req,res)=>{
    console.log('marche avec le port 7070')
})

  





 
 
 










