

export const Step2Form = () => {

    const startYear = 2000;
      const endYear = 2024;
      const years = [];
      for (let year = startYear; year <= endYear; year++) {
        years.push(year);
      }

    return(
        <>
         <div className="w-full flex flex-col justify-center items-center text-start mx-auto p-4 gap-4 ">
        <div className="flex gap-4">
          <h1 className="text-lg mr-10">Course :</h1>
          <select className="ouline-none border-b-2 w-40">
            <option value="SELECT">Select</option>
          </select>
        </div>

        <div className="flex gap-4 ">
          <h1 className="text-lg">Passing Year :</h1>
          <select className="ouline-none border-b-2 w-40">
            {years.map((year) => (
              <option key={year} value={year} >
                {year}
              </option>
            ))}
          </select>
        </div>

        <div>
            <input type="number" placeholder="Total CGPA" className=" mt-5 w-72 border-b-2 outline-none" />
        </div>
        <div>
            <input type="number" placeholder="Secured CGPA" className=" mt-5 w-72  border-b-2 outline-none " />
        </div>

        <div>
          <input type="file" placeholder="upload" />
        </div>
      </div> 
        </>
    )
}