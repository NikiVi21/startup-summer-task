import { usersAPI } from "../api/api";

const SET_USER_REPO = "SET_USER_REPO";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_REPO_COUNT = "SET_TOTAL_REPO_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  repositories: [],
  per_page: 4,
  page: 1,
  isFetching: true,
};

const repoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_REPO: {
      return {
        ...state,
        repositories: [...action.repositories],
      };
    }
    case SET_PAGE: {
      return { ...state, page: action.page };
    }
    case SET_TOTAL_REPO_COUNT: {
      return { ...state, totalRepoCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const setPage = (page) => ({
  type: SET_PAGE,
  page,
});

export const setUserRepo = (repositories) => ({
  type: SET_USER_REPO,
  repositories,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getUserRepoThunk = (username, per_page, page) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setPage(page));
  usersAPI.getRepositories(username, per_page, page).then((response) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUserRepo(response));
  });
};

export default repoReducer;
