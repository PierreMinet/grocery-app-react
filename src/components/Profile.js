import Button from "./Button";
import { useContext } from "react";
import { ConnectionContext } from "../context/ConnectionContext";
import { LandingContext } from "../context/LandingContext";

function Profile() {
    const { connection, setConnection } = useContext(ConnectionContext);
    const { landing, setLanding } = useContext(LandingContext);

    const logout = () => {
        setConnection(!connection);
        setLanding('landing');
    }

    return (
        <article className="home-register">
            <h2 className="main-black">Profile</h2>
            <Button buttonClass="main-button" buttonText="Logout" onClickFunction={logout} />
        </article>
    );
}

export default Profile;