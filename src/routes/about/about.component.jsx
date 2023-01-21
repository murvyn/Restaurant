import "./about.styles.scss";

const AboutUs = () => {
  return (
    <section class="about" id="about">
      <h3 class="sub-heading">about us</h3>
      <h1 class="heading">why choose us?</h1>

      <div class="row">
        <div class="image">
          <img src="https://i.ibb.co/42kP8rX/about-img.png" alt="about-img" />
        </div>

        <div class="content">
          <h3>best food in the country</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            sequi corrupti corporis quaerat voluptatem ipsam neque labore modi
            autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio
            corporis nihil!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.
          </p>
          <div class="icons-container">
            <div class="icons">
              <i class="fas fa-shipping-fast"></i>
              <span>free delivery</span>
            </div>
            <div class="icons">
              <i class="fas fa-dollar-sign"></i>
              <span>easy payments</span>
            </div>
            <div class="icons">
              <i class="fas fa-headset"></i>
              <span>24/7 service</span>
            </div>
          </div>
          <button class="btn">learn more</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
