const initdata = {
  package: [],
};

const packageCartReducer = (state = initdata, { type, payload }) => {
  switch (type) {
    case "UPDATE_TO_CART": {
      return {
        ...state,
        package: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default packageCartReducer;
