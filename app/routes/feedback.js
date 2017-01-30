var express = require('express');
var router = express.Router();

router.get('/feedback', function (request, response) {

    response.render('feedback', {
        pageTitle: 'Feedback',
        pageID: 'feedback',
    });
});

module.exports = router;