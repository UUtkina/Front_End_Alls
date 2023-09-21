import React, { FC, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

interface IcounterProps {
    initialValue: number;
}
interface IJson {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const Counter: FC<IcounterProps> = ({ initialValue }): JSX.Element => {
    const [count, setCount] = useState<number>(initialValue);

    const [json, setJson] = useState<IJson | null>(null);

    useEffect(() => {
        console.log("komponemt smontirovan");
        //fetch("https://jsonplaceholder.typicode.com/todos/1")
        //      .then((response) => response.json())
        //    .then((data) => setJson(data));
        return () => {
            console.log("komponemt razmont");
        };
    }, []);

    useEffect(() => {
        console.log("komponemt obnovlen");
    }, [count]);

    const dicrement = (): void => {
        setCount(count - 1);
    };

    return (
        <div style={{border:'2px'}}>
            {json && (
                <>
                    {json.id}
                    {json.completed}
                    {json.title}
                    {json.userId}
                </>
            )}

            <h1 className="mx-auto p-2" style={{ width: '300px' }}>Counter:{count}</h1>
            <button type="button" className="btn btn-primary" style={{ width: '300px', marginLeft:'400px', alignItems:'center'
 }} onClick={(): void => setCount(count + 1)}>Increment</button>
            <button type="button" className="btn btn-warning" style={{ width: '300px', margin:'20px' }}  onClick={dicrement}>Dicrement</button>
        </div>
    );
};
export default Counter;
