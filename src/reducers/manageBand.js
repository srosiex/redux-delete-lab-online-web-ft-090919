import uuid from "uuid";

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

    const band = {
      id: Math.random()*10000000000000000,
      name: action.name
    }
      return { ...state, bands: state.bands.concat(band)  }

      case 'DELETE_BAND':

      return { ...state, bands: state.bands.filter(b => b.id !== action.id)}
    default:
      return state;
  }
};
