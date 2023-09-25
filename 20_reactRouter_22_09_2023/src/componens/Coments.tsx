
import React, { useState, useEffect } from "react";
import style from './Alls.module.css'

interface Coment {
    postId: number;
    id: number;
    body: string;
}

export default function ComentList(): JSX.Element {
    const [coments, setComents] = useState<Coment[] >([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((data) => {
                setComents(data);
            });
        return () => {
            console.log("Cleanup");
        };
    }, []);

    return (
        <>
            {coments &&
                coments.map((coment) => (
                    <div
                        key={coment.postId}
                        className={style.container}
                    >
                        <p>
                            <strong style={{ marginRight: '10px' }}>ID:{coment.postId}</strong> <strong style={{ marginRight: '10px' }}>UserId:</strong>
                            {coment.id}, <strong style={{ marginRight: '10px' }}>Title:</strong>
                            {coment.body}
                        </p>
                    </div>
                ))}
        </>
    );
}





