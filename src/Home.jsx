import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    let [blogs, setBlogs] = useState([
        {
            ID: 1,
            title: "Title 1",
            body: "lorem Ipsum...",
            author: "Omollo",
        },
        {
            ID: 2,
            title: "Title 2",
            body: "lorem Ipsum...",
            author: "Nimetoka",
        },
        {
            ID: 3,
            title: "Title 3",
            body: "lorem Ipsum...",
            author: "Bondo",
        },
    ]);
    return (
        <div className="home">
            <BlogList blogs={blogs} title="This is the fucking title"/>
        </div> 
    );
};

export default Home;
