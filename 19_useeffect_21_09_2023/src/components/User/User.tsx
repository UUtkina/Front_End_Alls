import React, { useState, useEffect } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

export default function UserList(): JSX.Element {
    const [users, setUsers] = useState<User[] | null>(null);

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
        <>
            {users &&
                users.map((user) => (
                    <div
                        key={user.id}
                        className="mx-auto p-2" style={{ width: '600px' }}
                    >
                        <p>
                            <strong style={{ marginRight: '10px' }}>ID:{user.id}</strong> <strong style={{ marginRight: '10px' }}>Name:</strong>
                            {user.name}, <strong style={{ marginRight: '10px' }}>Email:</strong>
                            {user.email}
                        </p>
                    </div>
                ))}
        </>
    );
}
