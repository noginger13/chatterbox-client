// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),
  $username: $('.username'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$username.on('click', console.log('clicked'));
    // MessagesView.$username.on('click', MessagesView.handleClick);
  },

  render: function(data) {
    // TODO: Render _all_ the messages.
    //loop
    //each message renderMessage
    console.log('Hello');
    for (var i = data.length - 1; i >= 0; i--) {
      // console.log('what\'s going on');
      var currentMessage = data[i];//object
      var currentMessageId = currentMessage['message_id'];
      var rendered;
      //check if message id already exists, if not escape & add to data
      if (!Messages._data[0]) {
        MessagesView.renderMessage(currentMessage);
      }
      if (Messages._data[0]['message_id'] < currentMessageId) {
        MessagesView.renderMessage(currentMessage);
      }
      if (rendered !== undefined) {
        //run through template
        //prepend to #chats
        // console.log('if works');
      }
    }
    var selectedRoom = RoomsView.$select.val();
    console.log('selected', selectedRoom);

  },

  renderMessage: function(message) {

    // TODO: Render a single message
    if (message['roomname']) {
      message['roomname'] = message['roomname'].replace(/</g, '\\u003c');
    } else if (typeof(message['roomname']) !== 'string') {
      message['roomname'] = JSON.stringify(message['roomname']);
    }
    if (message['text']) {
      message['text'] = message['text'].replace(/</g, '\\u003c');
    } else if (typeof(message['text']) !== 'string') {
      message['text'] = JSON.stringify(message['text']);
    }
    if (message['username']) {
      message['username'] = message['username'].replace(/</g, '\\u003c');
    } else if (typeof(message['username']) !== 'string') {
      message['username'] = JSON.stringify(message['username']);
    }



    Messages._data.unshift(message);

    var $chat = MessageView.render(message);
    this.$chats.prepend($chat);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    console.log('clicked');
  }

};

// // Skeleton code
// // MessagesView is an object which controls the DOM elements
// // responsible for displaying messages.

// var MessagesView = {

//   $chats: $('#chats'),

//   initialize: function() {
//     // TODO: Perform any work which needs to be done
//     // when this view loads.
//   },

//   render: function() {
//     // TODO: Render _all_ the messages.
//   },

//   renderMessage: function(message) {
//     // TODO: Render a single message.
//   },

//   handleClick: function(event) {
//     // TODO: handle a user clicking on a message
//     // (this should add the sender to the user's friend list).
//   }

// };