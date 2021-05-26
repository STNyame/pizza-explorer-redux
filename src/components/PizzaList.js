// src/components/PizzaList.js
import { useSelector, useDispatch } from "react-redux";
import { selectAllPizzas } from "../store/pizzas/selectors";
import { selectUser } from "../store/user/selectors";
import { addToFavorite } from "../store/user/actions";
import "./PizzaList.scss";

export default function PizzaList() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectAllPizzas);

  return (
    <div>
      <div className="PizzaList">
        <h1>Pizza Explorer</h1>
        <p>
          Welcome back, <strong>{user.name}</strong>!
        </p>
        <p>
          We currently have: <strong>{pizzas.length}</strong> pizzas!
        </p>
        <p>TODO: the list of pizzas</p>
        <ul className="Pizzas">
          {pizzas.map((pizza) => {
            return (
              <li
                key={pizza.id}
                className="Pizza"
                style={{ backgroundImage: `url(${pizza.image})` }}
              >
                <button
                  onClick={() => {
                    console.log(pizza.id);
                    dispatch(addToFavorite(pizza.id));
                  }}
                  className={`FavToggle ${
                    user.favorites.includes(pizza.id) ? "fav" : ""
                  }`}
                >
                  {user.favorites.includes(pizza.id) ? "♥" : "♡"}
                </button>
                <div className="Overlay">
                  <strong>{pizza.name}</strong> ({pizza.description}) <br />
                  <em>Bought {pizza.bought} times</em>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
