
const InitialState = {
  voter: null,
  voters: null,
  isLoading: false,
  error: null,
  displayContent: false,
  senators: []
};

export const voterReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        voter: action.payload,
      };
    case "FETCH_VOTERS":
      return {
        ...state,
        voters: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        appError: action.payload,
      };
      case "FETCH_SENATORS":
        return {
          ...state,
          senators: action.payload,
        };
    default:
      return state;
  }
};
