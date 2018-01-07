// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener('DOMContentLoaded', function(){
  var form = document.querySelector('#new_tweet');

  form.addEventListener('submit', function(e){
      e.preventDefault();
      $.ajax({
        url:  form.getAttribute('action'),
        method: form.getAttribute('method'),
        dataType:  'HTML',
        data: $(form).serialize()
      }).done(function(data){
        console.log(data);
      });

  });

});
