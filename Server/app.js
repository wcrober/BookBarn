const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const pgp = require('pg-promise')()
const connect = "postgres://localhost:5432/practice"
const db = pgp(connect)




app.use(cors())
app.use(bodyParser.json())


//let books = [
//   {name: "Book1", genre:"Action", publisher:"Publisher1"},
//   {name: "Book2", genre:"Romance", publisher:"Publisher2"}
//] 

app.post('/api/books',(req,res )=> {
    let name = req.body.name
    let genre = req.body.genre
    let publisher = req.body.publisher
    db.any('INSERT into books(name,genre,publisher) VALUES($1, $2, $3)',[name,genre,publisher])
    .then((savebook) => {
        if(savebook) {
            res.json({success:true})
        }else {
            res.json({success:false, message: "Error Saving book"})
        }
    })
})


app.get('/api/books',(req,res) => {
    db.any('select * from books')
    .then((allbooks) => {
        res.json(allbooks)
        console.log(allbooks)
    }
    ).catch(error => console.log(error))
})


/*app.post('/api/addbook', (req,res) => {

    let name = req.body.name
    let genre = req.body.genre
    let publisher = req.body.publisher
    
   

    books.push({name:name, genre:genre, publisher:publisher})
    res.json({success:true, message: 'Book Added'})
    
})


*/



app.listen(8080,() => {
    console.log('Express Server is running on port 8080')
})