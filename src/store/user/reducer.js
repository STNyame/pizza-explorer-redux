// src/store/user/reducer.js
const initialState = {
  name: "Helva",
  id: 42,
  favorites: [67283, 357311],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "user/addToFavorite":
      if (!state.favorites.includes(action.payload)) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      } else {
        return {
          ...state,
          favorites: [...state.favorites.filter((id) => id !== action.payload)],
        };
      }
    default: {
      return state;
    }
  }
}
