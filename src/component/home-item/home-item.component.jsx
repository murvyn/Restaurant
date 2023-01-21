import './home-item.styles.scss'
import '../../index.scss'

function CategoryItem({ image }) {
  const { imagePath } = image;
  return (
    <div className="slide">
      <div className="content">
        <span>our special dish</span>
        <h3>spicy noodles</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam optio
          quos ducimus.
        </p>
        <button className="btn">
          order now
        </button>
      </div>
      <div className="image">
        <img src={imagePath} alt="pics" />
      </div>
    </div>
  );
}

export default CategoryItem;
