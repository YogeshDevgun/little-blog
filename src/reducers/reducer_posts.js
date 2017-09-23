import _ from 'lodash';
import { FETCH_POSTS } from '../actions';
import { FETCH_POST } from '../actions';

export default function(state = {}, action){

  switch (action.type) {
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post
      // return newState;
      //make a new key action.payload.data.id and set its value to action.p
      //payload.data
      return { ...state, [action.payload.data.id]: action.payload.data};

    case FETCH_POSTS:
      //as it will be coming in array we will convert it into object,
      //so while searching through array by for loop we will directly use
      //key value to pick value out of object.
      return _.mapKeys(action.payload.data, 'id')

    default:
      return state;
  }


}
