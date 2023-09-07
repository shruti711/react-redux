import { Fragment } from "react";
import { useSelector } from "react-redux";
import Counter from "./Counter";
import Header from "./Header";
import Auth from "./Auth";
import UserProfile from "./UserProfile";

function ReduxContainer() {

    const isAuth = useSelector(state => state.auth.isAutenticated);

    return (
        <Fragment>
            <Header />
            {isAuth ? <UserProfile /> : <Auth />}
            <Counter />
        </Fragment>
    );
}

export default ReduxContainer;
