var express          = require('express');
var router           = express.Router();
var bodyParser       = require('body-parser');
var feedbackData     = require('../data/feedback.json');
var fs               = require('fs');

router.get('/api', function (request, response) {
    response.json(feedbackData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/api', function (request, response) {
    feedbackData.unshift(request.body);
    fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function (error) {
        if (error) {
            console.log(error);
        }
    });

    response.json(feedbackData);
});

router.delete('/api/:id', function (request, response) {
    feedbackData.splice(request.params.id, 1);
    fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function (error) {
        if (error) {
            console.log(error);
        }
    });

    response.json(feedbackData);
});


module.exports = router;