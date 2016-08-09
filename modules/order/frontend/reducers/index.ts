import 'core-js/shim';
import { combineReducers } from 'redux'

import selectionState from './selection_state';
import visibleStates from './visible_states';

const printApp = combineReducers({
  selectionState,
  visibleStates
})

export default printApp
