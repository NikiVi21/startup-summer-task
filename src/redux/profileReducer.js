import { usersAPI } from "../api/api";
import profile from "../assets/profile.png";

const SET_USER_DATA = "SET_USER_DATA";
const SET_ERROR = "SET_ERROR";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  photo: profile,
  name: "",
  login: "",
  followers: null,
  following: null,
  totalRepoCount: null,
  html_url: "",
  isError: false,
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        photo: action.photo,
        name: action.name,
        login: action.login,
        followers: action.followers,
        following: action.following,
        totalRepoCount: action.totalRepoCount,
        html_url: action.html_url,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        login: action.login,
        isError: action.isError,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const setUserData = (
  photo,
  name,
  login,
  followers,
  following,
  totalRepoCount,
  html_url
) => ({
  type: SET_USER_DATA,
  photo,
  name,
  login,
  followers,
  following,
  totalRepoCount,
  html_url,
});

export const setError = (isError) => ({
  type: SET_ERROR,
  isError,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getUserDataThunk = (username) => async (dispatch) => {
  try {
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.getUser(username);
    dispatch(
      setUserData(
        response.avatar_url,
        response.name,
        response.login,
        response.followers,
        response.following,
        response.public_repos,
        response.html_url
      )
    );
    dispatch(toggleIsFetching(false));
  } catch (error) {
    dispatch(setError(true));
  }
};

export default profileReducer;
