import { useContext } from "react";
import Landing from "./Landing";
import Profile from "./Profile";
import { ConnectionContext } from "../context/ConnectionContext";
import { LandingContext } from "../context/LandingContext";
import Login from "./Login";
import Register from "./Register";

function Homepage() {
    const { connection, setConnection } = useContext(ConnectionContext);
    const { landing, setLanding } = useContext(LandingContext);

    function renderSwitch(section) {
        switch (section) {
            case 'landing':
                return <Landing />;
            case 'login':
                return <Login />;
            case 'register':
                return <Register />;
            default:
                return <p>An error occured</p>;
        }
    }

    return (
        <>
        {connection ?
            <div className="home-div">
                <Profile />
            </div>
         :
            <div className="home-div">
                <article className="home-picture">
                </article>
                {renderSwitch(landing)};
            </div>
        };
        </>
    );
}

export default Homepage;