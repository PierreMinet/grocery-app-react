import Button from "./Button";
import { ConnectionContext } from "../context/ConnectionContext";
import { useContext } from "react";
import { LandingContext } from "../context/LandingContext";

function Landing() {
    const { connection, setConnection } = useContext(ConnectionContext);
    const { landing, setLanding } = useContext(LandingContext);

    return (
        <article className="home-register">
            <h2 className="main-black">My Online</h2>
            <h1 className="main-red main-title"
            style={{transform: 'translateY(-5px)'}}>
                Grocery App
            </h1>
            <Button buttonClass="main-button" buttonText="Login" onClickFunction={() => setLanding('login')} />
            <Button buttonClass="secondary-button" buttonText="Register" onClickFunction={() => setLanding('register')} />
        </article>
    )
}

export default Landing;