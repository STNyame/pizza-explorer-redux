// import "./App.css";
import AddPizzaForm from "./components/addPizzaForm";
import PizzaList from "./components/PizzaList";
import Restaurantlist from "./components/RestaurantList";

function App() {
  return (
    <div className="App">
      <PizzaList />
      <AddPizzaForm />
      <Restaurantlist />
    </div>
  );
}

export default App;
