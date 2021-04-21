const express= require('express')
const bodyParse= require('body-parser')


const userrouter= require('C:/Users/Aluno/Downloads/workspace/Node/userrouter.js')


const app= express()
const port= 3000



//app.use(bodyParse.json())

app.use(bodyParse.urlencoded({
  extended: false
}))



userrouter(app)

app.get('/', (req, res) => 
res.send('Olá mundo') )

app.listen(port, console.log('Api load!'))



