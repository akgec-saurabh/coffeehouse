import { Fragment, useState } from "react";
import "./App.css";
import AddOn from "./components/AddOn";
import Cart from "./components/Cart";
import CoffeMenu from "./components/CoffeeMenu";
import Header from "./components/Header";
import Bill from "./pages/Bill";
const menu = [
  {
    item: "Espresso",
    milk: 60,
    cream: 75,
    latte: 100,
  },
  {
    item: "Cappuccino",
    milk: 80,
    cream: 90,
    latte: 125,
  },
  {
    item: "Latte",
    milk: 100,
    cream: 125,
    latte: 150,
  },
];
function App() {
  const [selItem, setSelItem] = useState();
  const [openAddON, setOpenAddOn] = useState(false);
  const [order, setOrder] = useState([]);
  const [bill, setBill] = useState(false);

  const cartHandler = (prop) => {
    console.log(prop);

    let temp = 0;
    if (
      order.find((item, i) => {
        temp = i;
        return item.item === prop.item && item.addOn === prop.addOn;
      })
    ) {
      setOrder((prev) => {
        prev[temp].quantity += 1;
        return [...prev];
      });
    } else {
      setOrder((prev) => [...prev, prop]);
    }
    setOpenAddOn(false);
  };

  const addOn = (c) => {
    setOpenAddOn(true);
    setSelItem(c);
  };

  const addCloseHandler = () => {
    setOpenAddOn(false);
  };

  const billHandler = () => {
    setBill(true);
  };

  const againHandler = () => {
    setBill(false);
    setOrder([]);
  };
  return (
    <Fragment>
      <Header />
      {!bill && <CoffeMenu menu={menu} addOn={addOn} />}
      {openAddON && (
        <AddOn
          addClose={addCloseHandler}
          sel={selItem}
          addToCart={cartHandler}
        />
      )}
      {!bill && order.length > 0 && <Cart bill={billHandler} order={order} />}
      {bill && <Bill again={againHandler} order={order} />}
    </Fragment>
  );
}

export default App;
