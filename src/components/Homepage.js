import Button from "./Button";

function Homepage() {
    return (
        <div className="home-div">
            <article className="home-picture">
            </article>
            <article className="home-register">
                <h2 className="main-black">My Online</h2>
                <h1 className="main-red main-title"
                style={{transform: 'translateY(-5px)'}}>
                    Grocery App
                </h1>
                <Button buttonClass="main-button" buttonText="Login" />
                <Button buttonClass="secondary-button" buttonText="Register" />
            </article>
        </div>
    );
}

export default Homepage;