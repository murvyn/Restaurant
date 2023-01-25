import { Fragment } from "react";
import Directory from "../../component/directory/directory.component";
import Footer from "../../component/footer/footer.component";

const Home = () => {
  const images = [
    {
      id: 1,
      imagePath: `${require("../../images/home-img-1.png")}`,
    },
    {
      id: 2,
      imagePath: `${require("../../images/home-img-2.png")}`,
    },
    {
      id: 3,
      imagePath: `${require("../../images/home-img-3.png")}`,
    },
  ];
  return (
    <Fragment>
      <section>
        <div>
          <Directory images={images} />
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};
export default Home;
