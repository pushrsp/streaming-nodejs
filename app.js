const app = require("express")()
const fs = require("fs")

app.get("/", (req, res) => {
    return res.status(200).sendFile(`${__dirname}/index.html`)
})

app.get("/outputs/:fileName", (req, res) => {
    const fileName = req.params.fileName;
    fs.readFile(`outputs/${fileName}`, (error, content) => {
        res.type("video/mp4")
        res.send(content)
    })
})

app.listen(3000);
