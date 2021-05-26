import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantsThatSellPizza } from "../store/restaurants/selectors";
import {
  selectRestaurantWithPizza,
  selectPizzasSoldByRestaurant,
} from "../store/selectors";
import { selectAllPizzas } from "../store/pizzas/selectors";

export default function Restaurantlist() {
  const restaurants = useSelector(selectRestaurantWithPizza);
  const pizzas = useSelector(selectAllPizzas);
  const [rest, setRest] = useState(pizzas[0].id);
  const [selectedRestaurant, setSelectedRestaurant] = useState(
    restaurants[0].id
  );

  const restaurantThatSellPizza = useSelector(
    selectRestaurantsThatSellPizza(rest)
  );
  const pizzaSoldByRestaurant = useSelector(
    selectPizzasSoldByRestaurant(selectedRestaurant)
  );

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map((currentRes) => {
          return (
            <li key={currentRes.id}>
              <h3>{currentRes.name}</h3>
              <ul>
                {currentRes.pizzas.map((pizza) => {
                  return (
                    <li key={pizza.id}>
                      <h4>{pizza.name}</h4>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      <label>
        <h2>
          Which restaurant sells:
          <select
            value={rest}
            onChange={(e) => setRest(parseInt(e.target.value))}
          >
            {pizzas.map((pizza) => (
              <option key={pizza.id} value={pizza.id}>
                {pizza.name}
              </option>
            ))}
          </select>
          ?
        </h2>
      </label>
      <ul>
        {restaurantThatSellPizza.map((current) => {
          return <li key={current.id}>{current.name}</li>;
        })}
      </ul>
      <label>
        <h2>
          Pizza sold by:
          <select
            value={selectedRestaurant}
            onChange={(e) => setSelectedRestaurant(parseInt(e.target.value))}
          >
            {restaurants.map((currentRes) => (
              <option key={currentRes.id} value={currentRes.id}>
                {currentRes.name}
              </option>
            ))}
          </select>
          ?
        </h2>
      </label>
      <ul>
        {pizzaSoldByRestaurant.map((current) => {
          return <li key={current.id}>{current.name}</li>;
        })}
      </ul>
    </div>
  );
}
