import express from "express";
import bodyParser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));


let posts = [];


app.get("/", (req,res) => {
    res.render("index.ejs", { posts });
});

app.get("/write", (req, res) => {
    res.render("write");
})

app.post("/write", (req,res) => {
    const {title, content} = req.body;

    posts.push({title, content});
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});