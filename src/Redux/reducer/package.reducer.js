import {
  GET_PACKAGE_ERROR,
  GET_PACKAGE_LOADING,
  GET_PACKAGE_SUCCESS,
} from "../actiontypes/package.types";

const initdata = {
  loading: false,
  error: false,
  package: [],
};

const packageReducerFun = (state = initdata, { type, payload }) => {
  switch (type) {
    case GET_PACKAGE_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case GET_PACKAGE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        package: payload,
      };
    }

    case GET_PACKAGE_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default packageReducerFun;
