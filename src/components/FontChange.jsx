import { useState } from "react";

export const FontChange = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div
        className="flex justify-center  border-l-2 border-l-gray-400 mr-auto "
        id="buttons_container"
      >
        {["A-", "A", "A+"].map((label, index) => (
          <button
            key={index}
            className={`text-gray-200 px-4 py-1 text-xl font-mono hover:bg-gray-500 rounded-lg mr-2 w-12 ${
              activeIndex === index ? "text-white underline" : ""
            }`}
            onClick={() => toggle(index)}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
};
