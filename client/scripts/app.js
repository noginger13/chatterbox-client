// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.
//order for session 1 of 2022-06-11
//Completed1.  escaping in the template
//       add class for the roomname
//Completed2.  append or prepend each message to the chat

//
//3.  address rooms button
//      in the home room submitted messages are prepended to the existing div
//      in other rooms messages are prepended to divs that have been  previously submitted
//      any roomname that we don't already have should be added
//      if it's not found we add the room to the rooms data structure- object cuz constant time!
//4.  friends
//      add friends based on username on click of other username (can you friend yourself?)
//      add class of friend to any div with username that is clicked on (getElementByClass?)
//      for friend classes text is bold
//5.   posting messages (related to the form)
//        get the roomname, username, and text
//        turn into an object base on that data
//        create a new template function
//        run the POST AJAX on new object
var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.

    // setInterval(App.fetch, 3000);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);//data is an array with objects for elements
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      //if
      MessagesView.render(data);
      RoomsView.render(Messages._data);
    });
    callback();
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
