var express = require('express');
var router = express.Router();

router.get('/chat', function (request, response) {

    response.render('chat', {
        pageTitle: 'Chat',
        pageID: 'chat',
    });
});

module.exports = router;