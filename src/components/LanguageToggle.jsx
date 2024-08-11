

import React, { useState } from "react";

export const  LanguageToggle = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <>
    
      <div className="text-center">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 text-white"
          >
          {isEnglish ? " Odia" : " English"}
        </button>
      </div>
    
   </>
  );
}

