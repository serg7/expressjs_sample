var express = require('express');
var router = express.Router();

router.get('/', function (request, response) {
    var data = request.app.get('appData');
    var pagePhotos = [];
    var pageSpeakers = data.speakers;

    data.speakers.forEach(function (item) {
       pagePhotos = pagePhotos.concat(item.artwork);
    });

    //console.log(pagePhotos);

    response.render('index', {
        pageTitle: 'Home',
        pageID: 'home',
        artwork: pagePhotos,
        speakers: pageSpeakers
    });
});


module.exports = router;