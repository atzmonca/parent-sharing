import { combineReducers } from "redux";
import testReducer from "../../features/testarea/testReducer";
import eventReducer from "../../features/event/eventReducer";
import modalReducer from "../../features/modals/modalReducer";
import authReducer from "../../features/auth/authReducer"
import { reducer as FormReducer } from 'redux-form'
import asyncReducer from "../../features/async/asyncReducer"

const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducer,
  modals: modalReducer,
  form: FormReducer,
  auth: authReducer,
  async: asyncReducer
});
export default rootReducer;
