// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('#new_tweet');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: form.getAttribute('action'),
      method: form.getAttribute('method'),
      dataType: 'JSON',
      data: $(form).serialize()
    }).done(function(data) {
      console.log(data);
      //Reset text field after submitting
      var inputField = document.querySelector("#tweet_message")
      inputField.value = "";

      //Prepend tweet to list
      var tweetList = document.querySelector('.tweets');
      var newTweet = `<li class="tweet">
				<p>${data.message}</p>
				<time>${data.created_at}</time>
			</li>`;
			$(tweetList).prepend(newTweet)
    });
  });
});
