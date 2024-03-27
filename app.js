// requiriendo express
const express = require('express');
// requiriendo path para acceder a la ruta de los archivos
const path =require ('path');
// requeriendo las funcionalidades de express
const app = express();


// creando la ruta raiz
app.get('/', (req,res)=>{
    // envio el archivo html a la vista
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})

// ruta de Babage
app.get('/babbage', (req,res)=>{
    // envio el archivo html a la vista
    res.sendFile(path.resolve(__dirname,'./views/babbage.html'))
})

// ruta de Berners-Lee
app.get('/berners-lee', (req,res)=>{
    // envio el archivo html a la vista
    res.sendFile(path.resolve(__dirname,'./views/berners-lee.html'))
})

// ruta de Clarke
app.get('/clarke', (req,res)=>{
    // envio el archivo html a la vista
    res.sendFile(path.resolve(__dirname,'./views/clarke.html'))
})

// ruta de Hamilton
app.get('/hamilton', (req,res)=>{
    // envio el archivo html a la vista
    res.sendFile(path.resolve(__dirname,'./views/hamilton.html'))
})

// ruta de Hoppper
app.get('/hopper', (req,res)=>{
    // envio el archivo html a la vista
    res.sendFile(path.resolve(__dirname,'./views/hopper.html'))
})

// ruta de Lovelace
app.get('/lovelace', (req,res)=>{
    // envio el archivo html a la vista
    res.sendFile(path.resolve(__dirname,'./views/lovelace.html'))
})

// ruta de Turing
app.get('/turing', (req,res)=>{
    // envio el archivo html a la vista
    res.sendFile(path.resolve(__dirname,'./views/turing.html'))
})

// Levantando el servidor
app.listen(3001, (req,res)=>{
    console.log('Servidor corriendo en http://localhost:3001');
})

app.use(express.static('public'))
//app.use(express.static(path.resolve(__dirname,'../public')))
