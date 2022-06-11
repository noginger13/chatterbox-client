// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //    FormView.$form.on('submit', FormView.handleSubmit);
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);

    /**show the messages for the current room */
  },

  render: function(data) {
    // TODO: Render out the list of rooms.
    for (var message of data) {
      this.renderRoom(message['roomname']);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    if (Rooms._data[roomname] === undefined) {
      Rooms._data[roomname] = roomname;
      var $option = Rooms.render({roomname: roomname});
      RoomsView.$select.append($option);
    }
  },

  handleChange: function(event) {
  // TODO: Handle a user selecting a different room.
    var selectedRoom = RoomsView.$select.val();
    var type = typeof(selectedRoom);
    console.log({selectedRoom, type});
    // MessagesView.$chats.empty();
    //$(selector).filter(criteria,function(index))
    //       Parameters:
    // criteria : It specifies a selector expression, a jQuery object or one or more elements to be returned from a group of selected elements.
    // function(index) : It specifies a function to run for each element in the set. If the function returns true, the element is kept. Otherwise, it is removed.
    // index : The index position of the element in the set.
    var $roomname = '.' + selectedRoom;
    console.log($roomname);
    $('.chat').filter($roomname).css('background', 'red');
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var newRoom = prompt('Enter a new roomname:', 'Pick a room, any room');
    if (newRoom) {
      newRoom = newRoom.replace(/</g, '\\u003c');
    } else if (typeof(newRoom) !== 'string') {
      newRoom = JSON.stringify(newRoom);
    }
    Rooms.add(newRoom);
  }

};
