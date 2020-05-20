const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    const about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/28775702?s=460&u=a097a006f8315a5db800da9e06e17bc45bfeb6d5&v=4",
        name: "Luis Dev",
        role: "Aluno - Rocketseat",
        description: "Estudante que em breve se tornara um grande desenvolvedor.",
        links: [
            { name: "Github", url: "https://github.com/LuisFernandoDeveloper"},
            { name: "Instagram", url: "/" },
            { name: "Linkedin", url: "/" }
        ]
    }
    return res.render("about", { about })
})

server.get("/classes", function(req, res){
    return res.render("classes", {items: videos})
})

server.get("/video", function(req, res){
    const id = req.query.id

    res.send(id)
})

server.listen(5000, function(){
    console.log("server is running")
})