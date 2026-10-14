import PortfolioCard from "../Components/PortfolioCard";
import SectionHeading from "../Components/SectionHeading";
import image_1 from "../assets/Portfolio (1).png";
import image_2 from "../assets/Portfolio (2).png";
import image_3 from "../assets/Portfolio (3).png";

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
];

const MyRecentWork = () => {
  return (
    <section className="py-30 bg-[#140C1C]">
      <div className="container">
        <SectionHeading
          className="max-w[440px]"
          subHeading={"My Recent Work"}
          heading={"Recent work for MY clients!"}
        />
      </div>

      <div className="flex gap-7.5 justify-center py-15">
        {RecentData.map((item) => (
          <PortfolioCard {...item} />
        ))}
      </div>
    </section>
  );
};

export default MyRecentWork;
