import React, { useState, useEffect, useContext } from "react";
import style from './Alls.module.css'
import { UserContext } from './User'

interface Blog {
    id: number;
    userId: number;
    title: string;
}

export default function BlogList(): JSX.Element {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [selectBlog, setSelectBlog] = useState<number | null>(null);
    
    const users = useContext(UserContext); // Consume the UserContext

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setBlogs(data);
            });
        return () => {
            console.log("Cleanup");
        };
    }, []);

    function handClickBlog(id: number) {
        if (selectBlog === id) {
            setSelectBlog(null)
        } else {
            setSelectBlog(id)
        }
    }

    return (
        <>
            {blogs &&
                blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className={style.container}
                        onClick={() => handClickBlog(blog.id)}
                    >
                        <p>
                            <strong style={{ marginRight: "10px" }}>
                                ID:{blog.id}
                            </strong>{" "}
                            <strong style={{ marginRight: "10px" }}>
                                UserId:
                            </strong>
                            {blog.userId},{" "}
                            <strong style={{ marginRight: "10px" }}>
                                Title:
                            </strong>
                            {blog.title}
                        </p>

                        {selectBlog === blog.id && (
                             <p>
                             {(() => {
                                 const foundUser = users.find(user => user.id === blog.userId);
                                 if (foundUser) {
                                     return (
                                         <>
                                             <strong style={{ marginRight: '10px' }}>Name:</strong>
                                             {foundUser.name},
                                             <strong style={{ marginRight: '10px' }}>Email:</strong>
                                             {foundUser.email}
                                         </>
                                     );
                                 }
                                 return null;
                             })()}
                            </p>
                        )}
                    </div>
                ))}
        </>
    );
}
