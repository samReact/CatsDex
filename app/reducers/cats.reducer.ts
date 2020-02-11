import {DELETE_CAT, ADD_CAT} from '../actions/types/cats.actions.types';

export interface ICat {
  id: number;
  name: string;
  url: string;
  description: string;
  breed: string;
}

export interface IState {
  cats: Array<ICat>;
  counter: number;
}

const initialState: IState = {
  cats: [
    {
      id: 0,
      name: 'Oliver',
      breed: 'Asian Semi-longhair',
      url:
        'https://cdn.pixabay.com/photo/2020/01/10/22/52/cat-4756360_1280.jpg',
      description: 'lorem',
    },
    {
      id: 1,
      name: 'Leo',
      breed: 'Bengal',
      url:
        'https://visualhunt.com/photos/1/portrait-of-white-cat-in-kitchen.jpg?s=s.jpg',
      description: 'lorem',
    },
    {
      id: 2,
      name: 'Milo',
      breed: 'Birman',
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Birmanstrofe.jpg/440px-Birmanstrofe.jpg',
      description: 'lorem',
    },
  ],
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
  }
  return state;
};

export default catsReducer;
