var express = require('express');
var router = express.Router();

router.get('/speakers', function (request, response) {
    var data = request.app.get('appData');
    var pagePhotos = [];
    var pageSpeakers = data.speakers;

    data.speakers.forEach(function (item) {
        pagePhotos = pagePhotos.concat(item.artwork);
    });

    response.render('speakers', {
        pageTitle: 'Speakers',
        pageID: 'speakerList',
        artwork: pagePhotos,
        speakers: pageSpeakers
    });
});

router.get('/speakers/:id', function (request, response) {
    var data = request.app.get('appData');
    var pagePhotos = [];
    var pageSpeakers = [];

    data.speakers.forEach(function (item) {
        if (item.shortname == request.params.id) {
            pageSpeakers.push(item);
            pagePhotos = pagePhotos.concat(item.artwork);
        }
    });

    response.render('speakers', {
        pageTitle: 'Speaker Info',
        pageID: 'speakerDetail',
        artwork: pagePhotos,
        speakers: pageSpeakers
    });
});

module.exports = router;