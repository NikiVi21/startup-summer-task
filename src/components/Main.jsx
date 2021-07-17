import Profile from "./Profile";
import RepositoriesContainer from "./RepositoriesContainer";
import style from "./Main.module.css";
import { useSelector } from "react-redux";
import startScreen from "../assets/startScreen.svg";
import notFound from "../assets/notFound.svg";
import emptyRepo from "../assets/emptyRepo.svg";

const Main = (props) => {
  const login = useSelector((state) => state.profilePage.login);
  const totalRepoCount = useSelector(
    (state) => state.profilePage.totalRepoCount
  );
  const isError = useSelector((state) => state.profilePage.isError);
  //const isFetching = useSelector((state) => state.profilePage.isFetching);

  //if (isFetching === true) {
  //  return <div className={style.loader}></div>;
  //} else {
  if (login && totalRepoCount === 0) {
    return (
      <div className={style.mainWrapper}>
        <Profile />
        <div className={style.emptyRepoWrapper}>
          <img src={emptyRepo} alt="" />
          <p className={style.text}>Repository list is empty</p>
        </div>
      </div>
    );
  } else if (login) {
    return (
      <div className={style.mainWrapper}>
        <Profile />
        <RepositoriesContainer />
      </div>
    );
  } else if (isError === true) {
    return (
      <div className={style.notFoundWrapper}>
        <img src={notFound} alt="" />
        <p className={style.text}>User not found</p>
      </div>
    );
  } else {
    return (
      <div className={style.startScreenWrapper}>
        <img src={startScreen} alt="" />
        <p className={style.text}>Start with searching a GitHub user</p>
      </div>
    );
  }
  //}
};

export default Main;
