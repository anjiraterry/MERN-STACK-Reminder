import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getitems = () => {
  return{ 
    type: GET_ITEMS,
  };
}
export const deleteitem = (id) => {
    return{ 
      type: DELETE_ITEM,
      payload: id
    };
  }
  export const additem = (item) => {
    return{ 
      type: ADD_ITEM,
      payload: item
    };
  }
