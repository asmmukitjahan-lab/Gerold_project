import Container from "./Container";
import CircularText from "../Components/CircularText";
import BannerImg from "../assets/Banner.png"
import ScrollToTop from "react-scroll-to-top";


import { GoArrowUpRight } from "react-icons/go";
// import { useRef } from "react";

const Banner = () => {
  // const scrollIcon = useRef(null);
  // window.addEventListener("scroll", () => {
  //   let scrollValue = window.scrollY;

  //   if (scrollValue >= 200) {
  //     scrollIcon.current.classList.add("fixed");
  //     scrollIcon.current.classList.remove("hidden");
  //   } else {
  //     scrollIcon.current.classList.add("hidden");
  //     scrollIcon.current.classList.remove("fixed");
  //   }
  // });

  return (
    <>
      <div className="bg-secondary text-white py-20">
        <Container className="w-[1880px]">
          <div>
            <h1 className="text-[180px] font-semibold flex items-center gap-20">
              Hello
              <CircularText
                text="REACT*BITS*COMPONENTS*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />
              Motion
            </h1>
          </div>
          <div className="w-[1335px] h-[780px] flex items-center gap-[135px]">
            <img src={BannerImg} alt="Image" />
            <div className="relative h-[468px] w-auto mt-[78px] mb-[234px] bg-transparent flex flex-col items-center gap-[28px]">
              <p className="text-4 font-sora text-white/60 font-regular leading-6">
                My role as a amplify tha story through my careful{" "}
                <span className="text-white/100">[Video Editor] </span>
                selection of footages, pacing, and visual style. My keen
                attention to detail allows me to enhance the mood.
              </p>
              {/* Label */}
              <div className="w-[310px] h-[155.50px] relative">
                <strong className="text-[110px] font-inter text-[#FFFFFF]">
                  12+
                </strong>
                <p className="absolute left-[132px] top-[120px] whitespace-nowrap text-[18px] font-normal leading-[22px] text-[#808080]">
                  Years of Experience
                </p>
              </div>

              {/* Purple dot */}
              <div className=" absolute left-[-2px] top-[328px] h-[100px] w-[100px] flex flex-col items-center justify-end cursor-pointer gap-5 rounded-full border-white/10 border-[0.25px] border-solid">
                <GoArrowUpRight className="h-5 w-5" />
                <span className="h-4 w-4 rounded-full bg-[#8b4df5]" />
              </div>
            </div>
          </div>
          <div></div>
        </Container>
      </div>

      {/* <div ref={scrollIcon} className="bottom-3 right-3 z-[1000]">
        <a href="#">
          <img src="scroll-to-up.png" alt="icon" />
        </a>
      </div> */}

      <ScrollToTop
        smooth
        style={{ background: "transparent" }}
        component={<MySVG />}
      />
    </>
  );
};

function MySVG() {
  return <img src="scroll-to-up.png" alt="icon" />;
}


export default Banner;


