import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action){

  switch (action.type) {
    case FETCH_POSTS:
      //as it will be coming in array we will convert it into object,
      //so while searching through array by for loop we will directly use
      //key value to pick value out of object.
      return _.mapKeys(action.payload.data, 'id')

    default:
      return state;
  }

}
