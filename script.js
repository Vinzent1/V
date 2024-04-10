function sendMessage() {
  var username = document.getElementById('username').value.trim();
  var message = document.getElementById('message').value.trim();
  if (message && username) {
    var chatBox = document.getElementById('chat-box');
    var newMessage = document.createElement('li');
    newMessage.textContent = `${username}: ${message}`;
    chatBox.appendChild(newMessage);
    document.getElementById('message').value = ''; // Feld leeren
    chatBox.scrollTop = chatBox.scrollHeight; // Zum neuesten Nachricht scrollen
  }
}