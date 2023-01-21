import { useState } from "react";
import { createContext } from "react";
import DISHES from "../../dishes-data.json";
import MENUS from "../../menus-data.json"

export const ProductsContext = createContext({
  dishes: [],
  menus: [],
});
export const ProductsProvider = ({ children }) => {
  const [dishes, setDishes] = useState(DISHES);
  const [menus, setMenus] = useState(MENUS)
  const value = { dishes, menus };
  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
};
