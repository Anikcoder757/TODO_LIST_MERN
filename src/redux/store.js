import { createStore, applyMiddleware, combineReducers, } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todosreducers } from './reducers/todosReducer';

const reducer = combineReducers({
    todos: todosreducers
})

const middleware = [thunk];


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;