export const Step3Form = () => {
  return (
    <>
      <div className="flex mx-auto flex-col gap-16 px-10 py-10">
        <div className="flex gap-4 justify-between">
          <input
            type="number, text"
            placeholder="IFSC Code"
            className=" outline-none border-b-[0.09rem] border-zinc-400 w-80 "
          />

          <div>
            <input
              type="text"
              placeholder="Bank Name"
              className=" outline-none border-b-[0.09rem] border-zinc-400 w-80 "
            />
          </div>
          <div>
          <input
            type="text"
            placeholder="Branch Name"
            className=" outline-none border-b-[0.09rem] border-zinc-400 w-80 "
            />
            </div>
        </div>

        <div className="flex gap-4 justify-between">
        <input
          type="number"
          placeholder="Accout No."
          className=" outline-none border-b-[0.09rem] border-zinc-400 w-80 "
          />
        <input
          type="text"
          placeholder="Account Holder Name"
          className=" outline-none border-b-[0.09rem] border-zinc-400 w-80 mr-5 "
          />

          <input type="file" />
          </div>
      </div>
    </>
  );
};
