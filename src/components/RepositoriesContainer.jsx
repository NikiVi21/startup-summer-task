import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Repositories from "./Repositories";
import { getUserRepoThunk, setPage } from "../redux/repoReducer";

class RepositoriesContainer extends React.Component {
  onPageChanged = (pageNumber) => {
    this.props.getUserRepoThunk(
      this.props.login,
      this.props.per_page,
      pageNumber
    );
    this.props.setPage(pageNumber);
  };

  render() {
    return (
      <Repositories
        repositories={this.props.repositories}
        onPageChanged={this.onPageChanged}
        page={this.props.page}
        per_page={this.props.per_page}
        totalRepoCount={this.props.totalRepoCount}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  repositories: state.repositories.repositories,
  page: state.repositories.page,
  per_page: state.repositories.per_page,
  totalRepoCount: state.profilePage.totalRepoCount,
  login: state.profilePage.login,
  isFetching: state.repositories.isFetching,
});

export default compose(connect(mapStateToProps, { getUserRepoThunk, setPage }))(
  RepositoriesContainer
);
