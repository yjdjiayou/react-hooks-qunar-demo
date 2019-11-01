import { createStore, combineReducers, applyMiddleware } from 'redux';

import reducers from './reducers';
import thunk from 'redux-thunk';

export default createStore(
    combineReducers(reducers),
    {
        trainNumber: null,
        departStation: null,
        arriveStation: null,
        seatType: null,
        departDate: Date.now(),
        arriveDate: Date.now(),
        departTimeStr: null,
        arriveTimeStr: null,
        durationStr: null,
        price: null,
        passengers: [],
        menu: null,
        isMenuVisible: false,
        searchParsed: false,
    },
    applyMiddleware(thunk)
);
