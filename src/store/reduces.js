import { combineReducers } from 'redux';
import registerReducer from '../register/user/registerReducer';

const rootReducer = combineReducers({
  register: registerReducer,  
});

export default rootReducer;
