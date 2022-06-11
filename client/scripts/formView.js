// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    console.log('howdie')

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    var username = App.username;
    var roomname = RoomsView.$select.val();
    var message = document.getElementById('message');
    // var messageText = message.innerText;
    // var data = new FormData();
    // var text = data.append('text', document.getElementById('message').value);
    console.log(text);
    console.log(message);
    console.log(data);
//     var element = document.getElementById('txt');
    var text = element.innerText || element.textContent;
// element.innerHTML = text;
        /**
     * notes by Brandon or Michael
     * get the message, room, and username (App.username)
     *
     */
    //
    // console.log(form.elements);
// {/* <form action="#" id="send" method="post">
//         <input type="text" name="message" id="message"/>
//         <input type="submit" name="submit" class="submit"/>
//       </form>
//     // { */}
    //   username: 'shawndrost',
    //   text: 'trololo',
    //   roomname: '4chan'
    // }
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};

//Skeleton code
// var FormView = {

//   $form: $('form'),

//   initialize: function() {
//     FormView.$form.on('submit', FormView.handleSubmit);
//   },

//   handleSubmit: function(event) {
//     // Stop the browser from submitting the form
//     event.preventDefault();

//     // TODO: Currently, this is all handleSubmit does.
//     // Make this function actually send a message to the Parse API.

//     console.log('click!');
//   },

//   setStatus: function(active) {
//     var status = active ? 'true' : null;
//     FormView.$form.find('input[type=submit]').attr('disabled', status);
//   }

// };