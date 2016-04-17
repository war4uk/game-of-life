(function (startGame, initialStates) {

  var startButtons = document.getElementById('presets');

  initialStates.forEach(function (stateInfo) {
    var button = document.createElement("button");
    button.innerText = 'Start ' + stateInfo.name;
    button.onclick = function () {
      startGame(stateInfo.state.dimensions, stateInfo.state.field);
    }

    startButtons.appendChild(button);
  });
})(LifeApp.startGame, LifeApp.initialStates);