import * as actions from "../../actions/index";
import * as types from "../../actions/types";

describe("actions", () => {
  it("should create an action to add a todo", () => {
    const text = ("Finish docs");
    const expectedAction = {
      type: types.FETCH_WEATHER,
      text
    };
    expect(actions.fetchWeather(text)).toEqual(expectedAction);
  });
});
