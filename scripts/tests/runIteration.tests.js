describe("CoordsHelper", function () {

  it("correctly handles loaf patten iteration", function () {
    var loafState = [
      0, 0, 0, 0, 0, 0,
      0, 0, 1, 1, 0, 0,
      0, 1, 0, 0, 1, 0,
      0, 0, 1, 0, 1, 0,
      0, 0, 0, 1, 0, 0,
      0, 0, 0, 0, 0, 0,
    ].map(function (value) { return !!value; });
    var testLoafField = {
      dimensions: { x: 6, y: 6 },
      currentState: loafState,
      iterationNumber: 0
    };

    var testLoafFieldAfterIteration = LifeApp.runIteration(testLoafField);
    // loaf is a stable form
    expect(testLoafFieldAfterIteration.currentState).toEqual(loafState);
  })

  it("correctly handles blinker patten iteration", function () {
    var blinkerInitialState = [
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
      0, 1, 1, 1, 0,
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
    ].map(function (value) { return !!value; });

    var tesBlinkerField = {
      dimensions: { x: 5, y: 5 },
      currentState: blinkerInitialState,
      iterationNumber: 0
    };

    var actualBlinkerFieldAfterIteration = LifeApp.runIteration(tesBlinkerField).currentState;

    var expectedBlinkerFieldAfterIteration = [
      0, 0, 0, 0, 0,
      0, 0, 1, 0, 0,
      0, 0, 1, 0, 0,
      0, 0, 1, 0, 0,
      0, 0, 0, 0, 0,
    ].map(function (value) { return !!value; });

    return expect(actualBlinkerFieldAfterIteration).toEqual(expectedBlinkerFieldAfterIteration);
  })
});