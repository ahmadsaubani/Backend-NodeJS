module.exports = function(app)
{
    const posts = require('../controller/PostController.js');

    app.get('/api/posts', posts.findAll);
    app.post('/api/post', posts.create);
    app.get('/api/post/:postId', posts.findById);
    app.put('/api/post/:postId', posts.update);
    app.delete('/api/post/:postId', posts.delete);
}