const Navbar = function() {
    return (
        <div className="navbar">
            <h1>
                My Blog
            </h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </div>
    );
}

export default Navbar;