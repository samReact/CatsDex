import {
  DELETE_CAT,
  ADD_CAT,
  UPDATE_CAT,
} from '../actions/types/cats.actions.types';
import {cats} from '../constants/datas.constants';

export interface ICat {
  id: number;
  name: string;
  url: string;
  description: string;
  breed: string;
  gender: string;
  age: string;
}

export interface IState {
  cats: Array<ICat>;
  counter: number;
}

const initialState: IState = {
  cats: cats,
  counter: 2,
};

const catsReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  let newCats: Array<ICat>;
  switch (type) {
    case DELETE_CAT:
      newCats = state.cats.filter(cat => cat.id !== payload.id);
      return {
        ...state,
        cats: newCats,
      };
    case ADD_CAT:
      return {
        ...state,
        cats: [...state.cats, payload],
        counter: state.counter + 1,
      };
    case UPDATE_CAT:
      let filteredCats = state.cats.filter(cat => cat.id !== payload.id);
      return {
        ...state,
        cats: [...filteredCats, payload],
      };
  }
  return state;
};

export default catsReducer;
