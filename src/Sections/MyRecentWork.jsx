import PortfolioCard from "../Components/PortfolioCard";
import SectionHeading from "../Components/SectionHeading";
import image_1 from "../assets/Portfolio (1).png";
import image_2 from "../assets/Portfolio (2).png";
import image_3 from "../assets/Portfolio (3).png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import ArrowButton from "../Components/CustomSliderArrow";

const RecentData = [
  {
    id: 1,
    img: image_1,
    title: "Deloitte",
    description: "Project was about precision and information...",
  },

  {
    id: 2,
    img: image_2,
    title: "New Age",
    description: "Project was about precision and information...",
  },
  {
    id: 3,
    img: image_3,
    title: "Sebastian",
    description: "Project was about precision and information...",
  },
  {
    id: 3,
    img: image_3,
    title: "Sebastian",
    description: "Project was about precision and information...",
  },
  {
    id: 3,
    img: image_3,
    title: "Sebastian",
    description: "Project was about precision and information...",
  },
];

const MyRecentWork = () => {
  return (
    <section className="py-30 bg-[#140C1C]">
      <div className="container">
        <div className="flex justify-between items-end gap-10 pb-15">
          <SectionHeading
            className="max-w-[440px]"
            subHeading={"My Recent Work"}
            heading={"Recent work for MY clients!"}
          />

          <div className="flex items-center justify-end gap-3.5">
            <ArrowButton
              direction="left"
              className="prevArrow"
            />
            <ArrowButton
              direction="right"
              className="nextArrow"
            />
          </div>
        </div>
      </div>

      {/* <div className="flex gap-7.5 justify-center py-15">
        {RecentData.map((item) => (
          <PortfolioCard {...item} />
        ))}
      </div> */}

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl:".prevArrow",
          nextEl:".nextArrow",
        }}
        modules={[Autoplay, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {RecentData.map((item) => (
          <SwiperSlide>
            <PortfolioCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MyRecentWork;
