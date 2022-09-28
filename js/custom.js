//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/sweatycave.ddns.net";

$.getJSON(url, function(r) {
  //data is the JSON string
  if (r.error) {
    $('#rest').html('<b>SERVER OFFLINE</b>'.fontcolor('red'));
    return false;
  }
  var pl = '';
  if (r.players.sample.length > 0) {
    pl = '<br>OP: ' + r.players.sample[0].name;
  }
  $('#rest').html('<b>SERVER ONLINE</b>'.fontcolor('green') + '<br><b>Server Name:</b> ' + r.description.replace(/§(.+?)/gi, '') + '<br><b>Players Online:</b> ' + r.players.online + pl + '<br><b>Server Version:</b> ' + r.version.name);
  $('#favicon').attr('src', r.favicon);

});