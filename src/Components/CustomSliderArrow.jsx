const ArrowButton = ({
  direction = "right",
  onClick,
  className = "",
  disabled = false,
  ariaLabel,
}) => {
  const isLeft = direction === "left";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || `Arrow ${direction}`}
      className={`
        group flex h-[55px] w-[55px]
        items-center justify-center
        rounded-full border-1 border-white/10
        bg-transparent text-white
        transition-all duration-300 ease-in-out
        hover:border-white/50 hover:bg-white/5
        active:scale-95
        disabled:cursor-not-allowed disabled:opacity-40
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-white/60
        ${className}
      `}
    >
      <svg
        width="14"
        height="12"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-300 ${
          isLeft ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"
        }`}
        aria-hidden="true"
      >
        {isLeft ? (
          <path
            d="M17 7L5 19L17 31M5 19H32"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M21 7L33 19L21 31M33 19H6"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
};

export default ArrowButton;
