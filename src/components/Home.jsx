const Home = () => {
  return (
    <section class="home" id="home">
      <div class="home__container container grid">
        <img src="./home.png" alt="" class="home__img" />

        <div class="home__data">
          <h1 class="home__title">
            Fund Easy will make your funding way better
          </h1>
          <p class="home__description">
            Make your will easily and without getting off course. a one-stop
            shop for all of your investing and finance needs.
          </p>
          <a href="#about" class="button button--flex">
            Explore <i class="ri-arrow-right-down-line button__icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
