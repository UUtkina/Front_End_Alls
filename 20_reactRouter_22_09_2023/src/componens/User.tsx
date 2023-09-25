import React, { createContext, useState, useEffect } from "react";
import style from './Alls.module.css'

export const UserContext = createContext<User[]>([]);

interface User {
    id: number;
    name: string;
    email: string;
}

export default function UserList(): JSX.Element {
    const [users, setUsers] = useState<User[] >([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            });
        return () => {
            console.log("Cleanup");
        };
    }, []);

    return (
        <UserContext.Provider value={users}>
            {users &&
                users.map((user) => (
                    <div
                        key={user.id}
                        className={style.container}
                    >
                        <p>
                            <strong style={{ marginRight: '10px' }}>ID:{user.id}</strong> <strong style={{ marginRight: '10px' }}>Name:</strong>
                            {user.name}, <strong style={{ marginRight: '10px' }}>Email:</strong>
                            {user.email}
                        </p>
                    </div>
                ))}
        </UserContext.Provider>
    );
}
