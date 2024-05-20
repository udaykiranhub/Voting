import { createStore } from 'redux';

const initialState = {
 setLock:false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'lock':
      return { ...state,setLock:action.payload};
    case 'unclock':
      return { ...state, setLock:action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
