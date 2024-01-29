import React from "react";

function Button({ label, iconUrl, backgroundColor, textColor, borderColor }) {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montsrrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor}  ${textColor} ${borderColor}`
          : "bg-coral-red  text-white border-coarl-red"
      } rounded-full  "w-full"}`}
    >
      {label}

      <img
        src={iconUrl}
        alt="arrow right icon "
        className="ml-2 rounded-full w-5 h-5 "
      />
    </button>
  );
}

export default Button;
