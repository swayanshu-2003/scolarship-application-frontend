import { useState } from "react";
import { Step1Form } from "../../../components/forms/Applicatiion form/Step1Form";
import { Step2Form } from "./Step2Form";
import { Step3Form } from "../Step3Form";
import { Step4Form } from "./Step4Form";

export const ApplcationScholarshipForm = () => {
  const [page, setPage] = useState(1);

  const handleBackButton = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextButton = () => {
    if (page < 4) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className=" w-[70rem] min-h-[1000px] mx-auto mt-5 bg-white">
        <RenderPage page={page} />
        <div className="flex gap-4 justify-center mt-10 w-full">
          <button
            onClick={handleBackButton}
            className="py-2 px-4 bg-orange-500 rounded-md text-white"
          >
            Back
          </button>
          <button
            onClick={handleNextButton}
            className="py-2 px-4 bg-blue-500 rounded-md text-white "
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

const RenderPage = ({ page }) => {
  if (page === 1) {
    return <Step1Form />;
  } else if (page === 2) {
    return <Step2Form />;
  } else if (page === 3) {
    return <Step3Form />;
  } else if (page === 4) {
    return <Step4Form />;
  }
};
