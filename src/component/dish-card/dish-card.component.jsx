import './dish-card.styles.scss'

const DishCard = ({ dish }) => {
  const { name, price, imageUrl } = dish;
  return (

      <div class="box-container">
        <div class="box">
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-eye"></a>
          <img src={imageUrl} alt="" />
          <h3>{name}</h3>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <span>{price}</span>
          <a href="#" class="btn">
            add to cart
          </a>
        </div>
      </div>

  );
};

export default DishCard;
