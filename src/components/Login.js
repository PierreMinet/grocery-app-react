import { useContext } from "react";
import Button from "./Button";
import { ConnectionContext } from "../context/ConnectionContext";
import { LandingContext } from "../context/LandingContext";

function Login() {
    const { connection, setConnection } = useContext(ConnectionContext);
    const { landing, setLanding } = useContext(LandingContext);

    return (
        <article className="home-register">
            <h2 className="main-black">Login</h2>
            <Button buttonClass="main-button" buttonText="Login" onClickFunction={() => setConnection(!connection)} />
            <Button buttonClass="secondary-button" buttonText="Back" onClickFunction={() => setLanding('landing')} />
        </article>
    );
}

export default Login;