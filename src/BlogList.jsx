const BlogList = function ({blogs, title}) {
    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                
                <div className="blog-preview" key={blog.ID}>
                    <p className="title">{title}</p>
                    <h2>{blog.title}</h2>
                    <h2>{"Written by " + blog.author}</h2>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;

