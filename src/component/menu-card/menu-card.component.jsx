import './menu-card.styles.scss'

const MenuCard = ({ menu }) => {
    const {name, imageUrl, price} = menu

  return (
    <section class="menu" id="menu">
      <div class="menu-container">
        <div class="menu-box">
          <div class="image-container">
            <img src={imageUrl} alt="" />
            <a href="#" class="fas fa-heart"></a>
          </div>
          <div class="menu-content">
            <div class="menu-stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <h3>{name}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, assumenda.
            </p>
            <button class="btn">
              add to cart
            </button>
            <span class="menu-price">
              {price}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCard;