import Container from "./Container";
import CircularText from "../Components/CircularText";
import BannerImg from "../assets/Banner.png";

import { GoArrowUpRight } from "react-icons/go";

const Banner = () => {
  return (
    <div className="bg-secondary text-white py-20">
      <Container className="w-[1880px]">
        <div>
          <h1 className="text-[180px] font-semibold flex items-center gap-14">
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
            <p className="text-4 font-sora text-[#FFFFFF] font-regular leading-6">
              My role as a amplify tha story through my careful [Video Editor]
              selection of footages, pacing, and visual style. My keen attention
              to detail allows me to enhance the mood.
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
            <div className=" absolute left-[-2px] top-[328px] h-[100px] w-[100px] flex flex-col items-center justify-end cursor-pointer gap-5 rounded-full border-[rgba(255,255,255,0.53)] border-[0.25px] border-solid">
              <GoArrowUpRight className="h-5 w-5" />
                <span className="h-4 w-4 rounded-full bg-[#8b4df5]"/>
            </div>
            
          </div>
        </div>
        <div></div>
      </Container>
    </div>
  );
};

export default Banner;

