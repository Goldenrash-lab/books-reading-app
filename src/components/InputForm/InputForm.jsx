import React from "react";

const InputForm = ({ label, placeholder, type, name }) => {
  return (
    <label className="flex flex-col text-sm  mb-5">
      <div className="mb-2 after:content-['*'] after:ml-0.5 after:text-[red]">
        {label}
      </div>
      <input
        className="w-[280px] tablet:w-80 p-3 h-[42px] bg-[#F5F7FA] shadow-inner"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
};

export default InputForm;
