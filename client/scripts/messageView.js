// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat  <%= roomname %>">
        <div class="username <%= username %>"><%- username %></div>
        <div class="message <%= username %>"><%- text %></div>
      </div>
    `)

};


// var compiled = _.template(
//   "<div class='module module-movie' style='background-image: url(<%= movieImage %>)'>" +
//     "<div class='movie-info'>" +
//       "<h3 class='movie-title'>" +
//          "<%= movieTitle %>" +
//       "</h3>" +
//       "<p class='movie-director'>" +
//          "<%= movieDirector %>" +
//       "</p>" +
//     "</div>" +
//   "</div>"
// );

//ESCAPING <%- JSON.stringify(initialState).replace(/</g, '\\u003c') %>;
