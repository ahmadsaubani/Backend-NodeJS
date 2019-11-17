const database = require('../config/db.config');
const Post = database.posts;

exports.create = (req, res) => {

    Post.create({
        title: req.body.title,
        description: req.body.description
    }).then(post => {
        res.status(200).send(post);
    }).catch(err => {
        res.status(500).send('error '+ err);
    })
};

exports.findAll = (req, res) => {

    Post.findAll().then(posts => {
        res.status(200).send(posts);
    }).catch(err => {
        res.status(500).send('error '+ err);
    })
};

exports.findById = (req, res) => {  

    Post.findByPk(req.params.postId).then(post => {
        res.status(200).send(post);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

exports.update = (req, res) => {

    const id = req.params.postId;

    Post.update({ 
        title: req.body.title, 
        description: req.body.description 
    }, 
    { 
        where: {id: id}
    })
    .then(() => {
        res.status(200).send('success update data!');
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
};

exports.delete = (req, res) => {

    const id = req.params.postId;
    
    Post.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('Post has been deleted!');
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    });
};