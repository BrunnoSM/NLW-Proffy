// function thisIsAFunction(){

// }

// thisIsAFunction()

// function express(){
//     return {         = A função pode retornar um objeto
//         name: "Jesus", 
//         age: 33
//     }
// }

// express().name ou age = função 

//----------------------------------------------------------------------------------------------------

// require('express')()
// .get("/", (req, res) => { // get para pegar a "/"
//     return res.send("Hi from NLW")
// })
// .get("/study", (req, res) => { // get para pegar o "/study"
// })
// .listen(5500) //essa numeração 5500 foi uma "homenagem que o mayke fez ao "live server" 

//----------------------------------------------------------------------------------------------------

// comandos usados no terminal(Digitados na maneira que está escrito sem letras Maiúscula e Minúscula):

// Sempre usar o bash no terminal (Git Bash) e não o powershell
// npm init -y === Inicia um novo projeto e cria o arquivo package.json
// npm install express === Instala ferramentas usadas para fazer servidores(Necessário)
// npm install nodemon -D === (nodemon = monitoramento do node) (-D significa que ele vai instalar só no lugar especifico da aplicação, que já está selecionado no caso)
// npm run dev === Para fazer rodar o servidor
// npm install nunjucks === Instalar o nunjucks
// npm install sqlite-async === Instalar o sqlite-async
// node src/database/db.js, node src/database/test.js  === Cria um arquivo com a pasta referenciada "node src/database/ mais o nome da pasta" database.sqlite (Para poder visualizar arquivo é necessário ter um extensão instalada "SQlite")

//----------------------------------------------------------------------------------------------------


// data
// const proffys = [
//     {
//         name:"Diego Fernandes",
//         avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
//         whatsapp: 899876545343,
//         bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
//         subject: "Química",
//         cost: "20",
//         weekday: [0],
//         time_from: [720],
//         time_to: [1220]
//     },
//     {
//         name:"Daniele Evangelista",
//         avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
//         whatsapp: 899876545343,
//         bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
//         subject: "Química",
//         cost: "20",
//         weekday: [1],
//         time_from: [720],
//         time_to: [1220]
//     },
//     {
//         name:"Brunno Miotto",
//         avatar: "https://avatars2.githubusercontent.com/u/68472360?s=460&u=3106bd3f3955af0a485f5ec28f55dd0e170a0bb9&v=4",
//         whatsapp: 899876545343,
//         bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
//         subject: "Química",
//         cost: "20",
//         weekday: [1],
//         time_from: [720],
//         time_to: [1220]
//     }
// ]

// Servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// Configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,  
})

// Início e configuração do servidor
server
// Receber os dados do req.body
.use(express.urlencoded({ extended: true}))
// Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// Start do servidor
.listen(5500)
