interface ICats {
  cats: [];
}

const initialState: ICats = {
  cats: [],
};

const catsReducer = (state = initialState) => {
  return state;
};

export default catsReducer;
