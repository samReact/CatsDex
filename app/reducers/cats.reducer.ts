export interface ICat {
  id: number;
  name: string;
  url: string;
  description: string;
  breed: string;
}

export interface IState {
  cats: Array<ICat>;
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
};

const catsReducer = (state = initialState, action: any) => {
  return state;
};

export default catsReducer;