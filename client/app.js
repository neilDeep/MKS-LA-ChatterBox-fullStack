var app = {

  init: function(){
    $('#send').on('submit', app.handleSubmit);
    app.fetch();
  },
  send: function(data){
    $.ajax({
      url: 'http://127.0.0.1:3000/',
      type: 'POST',
      data: JSON.stringify(data),
      success: function(data){
        console.log("Sent "+data+" to Server");
      },
      error: function(data){
        console.log("Error in Sending "+ data);
      }
    });
  },
  fetch: function(){
    console.log('Inside app.fetch');
    $.ajax({
      url: 'http://127.0.0.1:3000/', // links this AJAX request to the server.js GET method
      type: 'GET',
      'content-type': "application/json",
      success: function(data){ // the stringified messages array from server.js line 24
      console.log("Within fetch, data: ",JSON.parse(data));
        app.displayMessages(JSON.parse(data));
      },
      error: function(){
        console.log("Error in Receiving Data");
      }
    });
  },
  displayMessages: function(data){
    for(var i =0; i<data.length; i++) {
          $('#messages').append(data[i].username+': '+data[i].message+'</br>');
        }
  },
  handleSubmit: function(){
    var message = {
      username: 'Neil',
      message: $('#message').val()
    }
    console.log("Within displayMessages, data: ",message);
    app.send(message);
  }

};