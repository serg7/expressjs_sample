$(function() {
   $.getJSON('api', updateFeedback);

   $('.feedback-form').submit(function (e) {
       e.preventDefault();
       $.post('api', {
           name: $('#feedback-form-name').val(),
           title: $('#feedback-form-title').val(),
           message: $('#feedback-form-message').val(),
       }, updateFeedback);
   });

   $('.feedback-messages').on('click', function (e) {
      if (e.target.className == 'glyphicon glyphicon-remove') {
          $.ajax({
              url: 'api/' + e.target.id,
              type: 'DELETE',
              success: updateFeedback
          });
      }
   });

   function updateFeedback(data) {
       var output = '';
       $.each(data, function (key, item) {
           output += `<div class="feedback-item item-list media-list">
                         <div class="feedback-item media">
                             <div class="media-left"><button class="feedback-detele btn btn-xs btn-danger"><span id="'+ key +'"></span></button></div>
                             <div class="feedback-info media-body">
                                 <div class="feedback-head">
                                   <div class="feedback-title">` + item.title +
                                        `<small class="feedback-name label label-info">` + item.name +`</small>
                                   </div>
                                 </div>
                                 <div class="feedback-message">` + item.message + `</div>
                             </div>
                          </div>
                      </div>
                     `
       });

       $('.feedback-messages').html(output);
   }
});