import { Fragment } from "react";
import { useContext } from "react";
import DishCard from "../../component/dish-card/dish-card.component";
import Footer from "../../component/footer/footer.component";
import { ProductsContext } from "../../context/products/products.context";
import './dish.styles.scss'
//import "../../index.scss";

const Dish = () => {
  const { dishes } = useContext(ProductsContext);
  return (
    <Fragment>
    <section>
      <div className="dishes">
        <h3 class="sub-heading">our dishes</h3>
        <h1 class="heading">popular dishes</h1>

        <div className="dish-container">
          {dishes.map((dish) => {
            return <DishCard key={dish.id} dish={dish} />;
          })}
        </div>
      </div>
    </section>
    <Footer/>
    </Fragment>
  );
};

export default Dish;
