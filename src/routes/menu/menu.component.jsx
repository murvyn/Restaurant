import { useContext } from "react";
import MenuCard from "../../component/menu-card/menu-card.component";
import { ProductsContext } from "../../context/products/products.context";
import "./menu.styles.scss";

const Menu = () => {
  const { menus } = useContext(ProductsContext);
  return (
    <section>
      <div className="menus">
      <h3 class="sub-heading">our menu</h3>
      <h1 class="heading">today's special</h1>

        <div className="menu-container">
          {menus.map((menu) => {
            return <MenuCard key={menu.id} menu={menu} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
