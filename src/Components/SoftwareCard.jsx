import Icon1 from "../assets/carditem1.png";

const SoftwareCard = ({
  icon = Icon1,
  title = "Adobe After Effect",
  description = "Adobe After Effects is a powerful software application used motion graphics.",
  progress = 92,
}) => {
  return (
    <div className="w-[305px] h-[326px] rounded-[24px] bg-[#05080b] px-7 py-11 text-white">
      {/* Header */}
      <div className="flex items-center gap-[18px]">
        {/* Icon */}
        <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-full bg-[#11051c] shadow-[0_0_0_4px_rgba(193,132,244,0.12)]">
          <img src={icon} alt="" />
        </div>

        {/* Title */}
        <h3 className="max-w-[155px] text-[20px] font-normal leading-[24px] tracking-[-0.3px] text-white/100">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="mt-4 max-w-[244px] text-[16px] font-sora leading-[24px] text-white/60">
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
