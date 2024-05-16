import Navbar from "./Navbar";
import Home from "./Home";

function App() {
    const title = "Welcome to the new blog";
    const likes = 50;
    // const link = "https://manu.com/img/manu"
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <h1>{title}</h1>
                <h1>No of likes : {likes}</h1>
                <p>
                    
                </p>
            </div>
            <Home/>
        </div>
    );
}

export default App;
