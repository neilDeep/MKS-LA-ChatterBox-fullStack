var app = {
  init: function(){
    $('#send').on('submit', app.send);
  },
  send: function(){
    var userInput = $('#message').val();
    alert(userInput);
    event.preventDefault();
  },
  fetch: function(){

  },
  displayMessages: function(){

  },
  handleSubmit: function(){

  }

};