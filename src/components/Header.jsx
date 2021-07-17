import style from "./Header.module.css";
import logo from "../assets/logo.svg";
import ReduxForm from "./Form";
import { connect } from "react-redux";
import { compose } from "redux";
import { getUserDataThunk } from "../redux/profileReducer";
import { getUserRepoThunk } from "../redux/repoReducer";

const Header = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    props.getUserDataThunk(formData.user);
    props.getUserRepoThunk(formData.user, props.per_page, props.page);
  };

  return (
    <header className={style.header}>
      <img className={style.logo} alt="logo" src={logo} />
      <ReduxForm onSubmit={onSubmit} />
    </header>
  );
};
let mapStateToProps = (state) => ({
  photo: state.profilePage.photo,
  name: state.profilePage.name,
  login: state.profilePage.login,
  username: state.profilePage.username,
  page: state.repositories.page,
  per_page: state.repositories.per_page,
});

export default compose(
  connect(mapStateToProps, { getUserDataThunk, getUserRepoThunk })
)(Header);
