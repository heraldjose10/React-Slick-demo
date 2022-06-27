import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PhotoCard from "./components/photo-card";
import PrevArrow from "./components/prev-arrow";
import NextArrow from "./components/next-arrow";

import './App.styles.css'

function App() {

  const images = [
    { 'name': 'spenser-sembrat-2_Zn9zhGEG0-unsplash.jpg', 'credit': 'Spenser Sembrat' },
    { 'name': 'stephen-leonardi-wfxOTWu6bqQ-unsplash.jpg', 'credit': 'Stephen Leonardi' },
    { 'name': 'vimal-s-KMOSPP_iYV8-unsplash.jpg', 'credit': 'Vimal S' },
    { 'name': 'milad-fakurian-MWkApry5F30-unsplash.jpg', 'credit': 'Milad Fakurian' }
  ]

  const settings = {
    infinite: true,
    speed: 700,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  }

  return (
    <main>
      <h1 className="heading">React Slider Demo</h1>
      <Slider {...settings}>
        {
          images.map((image, index) => (
            <PhotoCard
              source={process.env.PUBLIC_URL + '/assets/' + image.name}
              credit={image.credit}
              key={index}
            />
          ))
        }
      </Slider>
    </main>
  );
}

export default App;
