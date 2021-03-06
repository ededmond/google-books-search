const router = require("express").Router();
const Book = require("../models/book.js");

router.get("/api/books",(req,res) => {
    Book.find({}).then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    })
})


router.delete("/api/books/:id",(req,res) => {
    Book.remove({
        _id:req.params.id
    }).then(response => {
        console.log(response);
        res.json(response);
    }).catch(error => {
        res.json(error);
    })
})

module.exports = io =>{
    
    router.post("/api/books",(req,res) => {
        Book.create({
            title: req.body.title,
            authors: req.body.authors,
            description: req.body.description,
            link: req.body.link,
            image: req.body.image
        }).then(response => {
            res.json(response);
            io.emit("savedBook",{title:req.body.title,authors:req.body.authors});
        }).catch(error => {
            res.json(error);
        })
    })
    return router;
};