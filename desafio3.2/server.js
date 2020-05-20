const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require("./courses")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req, res){
    const data = {
        logo: "img/logo.jpg",
        company: "Rocketseat",
        phrase: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
        description: "No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.",
        courses: [
            { name: "NodeJS" },
            { name: "React Native" },
            { name: "React JS" }
        ]
    }
    return res.render("index", { data })
})

server.get("/courses", function(req, res){
    return res.render("courses", { courses })
})

server.use(function(req, res){
    res.status(404).render("not-found")
})

server.listen(5000, function(){
    console.log("server is running")
})