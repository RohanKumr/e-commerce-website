import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";

export function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    // cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      <div>
        <Image
          src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width="400"
          height="400"
          alt="anything"
          priority
        ></Image>
      </div>
      <div>
        <Image
          src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width="400"
          height="400"
          alt="anything"
          priority
        ></Image>
      </div>
      <div>
        <Image
          src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width="400"
          height="400"
          alt="anything"
          priority
        ></Image>
      </div>
      <div>
        <Image
          src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width="400"
          height="400"
          alt="anything"
          priority
        ></Image>
      </div>
      <div>
        <Image
          src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width="400"
          height="400"
          alt="anything"
          priority
        ></Image>
      </div>
      <div>
        <Image
          src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width="400"
          height="400"
          alt="anything"
          priority
        ></Image>
      </div>
    </Slider>
  );
}
