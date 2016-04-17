LifeApp.startGame = (function (createGameField, runIteration, visualizer) {
  var interval;
  return function startGame(dimensions, initialState) {
    var gameField = createGameField(dimensions, initialState);
    visualizer.initializeField(gameField);

    if (interval) {
      clearInterval(interval);
    }

    interval = setInterval(function () {
      gameField = runIteration(gameField);

      visualizer.updateField(gameField);
    }, 500)
  }
})(LifeApp.createGameField, LifeApp.runIteration, LifeApp.Visualizer);
