import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PhotoCard from "./components/photo-card";
import './App.styles.css'

function App() {

  const images = [
    { 'name': 'spenser-sembrat-2_Zn9zhGEG0-unsplash.jpg', 'credit': 'Spenser Sembrat' },
    { 'name': 'stephen-leonardi-wfxOTWu6bqQ-unsplash.jpg', 'credit': 'Stephen Leonardi' },
    { 'name': 'vimal-s-KMOSPP_iYV8-unsplash.jpg', 'credit': 'Vimal S' },
  ]

  const settings = {
    arrows: false,
  }

  return (
    <main>
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
