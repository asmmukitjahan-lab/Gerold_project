<<<<<<< HEAD
import Icon1 from "../assets/carditem1.png";
=======
import Icon1 from "../assets/carditem1.png"
>>>>>>> 030af61d092d6c0e10d6b3e10b4605c787033a60

const SoftwareCard = ({
  icon = Icon1,
  title = "Adobe After Effect",
  description = "Adobe After Effects is a powerful software application used motion graphics.",
  progress = 92,
}) => {
  return (
    <div className="w-[305px] h-[326px] rounded-[24px] bg-[#05080b] px-7 py-11 text-white">
      {/* Header */}
<<<<<<< HEAD
      <div className="flex items-center gap-[18px]">
        {/* Icon */}
        <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-full bg-[#11051c] shadow-[0_0_0_4px_rgba(193,132,244,0.12)]">
=======
      <div className="flex items-center gap-5">
        {/* Icon */}
        <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-[#11051c] shadow-[0_0_0_4px_rgba(193,132,244,0.12)]">
>>>>>>> 030af61d092d6c0e10d6b3e10b4605c787033a60
          <img src={icon} alt="" />
        </div>

        {/* Title */}
<<<<<<< HEAD
        <h3 className="max-w-[155px] text-[20px] font-normal leading-[24px] tracking-[-0.3px] text-white/100">
=======
        <h3 className="max-w-[155px] text-[21px] font-normal leading-[1.15] tracking-[-0.3px] text-[#f5f5f5]">
>>>>>>> 030af61d092d6c0e10d6b3e10b4605c787033a60
          {title}
        </h3>
      </div>

      {/* Description */}
<<<<<<< HEAD
      <p className="mt-4 max-w-[244px] text-[16px] font-sora leading-[24px] text-white/60">
=======
      <p className="mt-5 max-w-[245px] text-[17px] font-normal leading-[1.4] text-[#929397]">
>>>>>>> 030af61d092d6c0e10d6b3e10b4605c787033a60
        {description}
      </p>

      {/* Progress */}
      <div className="mt-[45px]">
        <div className="mb-2 flex justify-end">
          <span className="text-[16px] font-normal text-[#eeeeee]">
            {progress}%
          </span>
        </div>

        <div className="h-[4px] w-full overflow-hidden rounded-full bg-[#282b2f]">
          <div
            className="h-full rounded-full bg-white transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default SoftwareCard;
