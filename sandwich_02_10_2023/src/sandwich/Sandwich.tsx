import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIngredient, clear } from './SandvichState'
import { RootState } from "../app/store";

export default function SandwichPage(): JSX.Element {
    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Сендвич</h1>
            <p>Ингредиенты: {ingredients}</p>
            <button onClick={() => dispatch(addIngredient("Сыр"))}>Добавить сыр</button>
            <button onClick={() => dispatch(addIngredient("Хлеб"))}>Добавить хлеб</button>
            <button onClick={() => dispatch(addIngredient("Салями"))}>Добавить салями</button>
            <button onClick={() => dispatch(clear())}>Очистить</button>
        </div>
    );
}
