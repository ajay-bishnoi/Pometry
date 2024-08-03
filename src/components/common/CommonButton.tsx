import React from "react";
interface Button {
  textName: string;
  className?: string;
}

const CommonButton = ({ className, textName }: Button) => {
  return (
    <div>
      <button
        className={`font-jakarta font-semibold text-white rounded border border-transparent py-3 px-[30px] bg-mix_red hover:bg-none hover:border-dark_red hover:text-dark_red transition duration-300 ease-linear ${className}`}
      >
        {textName}
      </button>
    </div>
  );
};

export default CommonButton;
