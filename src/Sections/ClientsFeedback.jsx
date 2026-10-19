import SectionHeading from "../Components/SectionHeading";
import Clients from "../Components/Clients";
import CommonBtn from "../Components/CommonBtn";


const ClientsFeedback = () => {
  return (
    <section className="w-full overflow-hidden bg-[#140C1C] font-sora text-white pb-30">
      <div className="container">
        <div className="mx-auto grid w-full max-w-[1290px] grid-cols-1 gap-27 lg:grid-cols-[505px_1fr] lg:gap-0 lg:px-0">
          <div>
            <SectionHeading
            className={"pb-[39px]"}
              heading={"Let’s Hear From Dear Clients."}
              subHeading={"Clients feedback"}
            />
            <CommonBtn>Contact Me</CommonBtn>
          </div>
          <Clients/>
        </div>
      </div>
    </section>
  );
};

export default ClientsFeedback;
