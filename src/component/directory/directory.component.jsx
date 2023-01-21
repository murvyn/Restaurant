import CategoryItem from "../home-item/home-item.component";
import '../../index.scss'

const Directory = ({ images }) => {
  return (
    <div className="section">
      {images.map((image) => {
        return (
          <CategoryItem key={image.id} image={image}/>
        );
      })}
    </div>
  );
};

export default Directory;
