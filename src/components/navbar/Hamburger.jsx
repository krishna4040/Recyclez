const Hamburger = ({ clickEvent }) => {
  return (
    <>
      <div
        className="cursor-pointer flex flex-col items-center justify-center rounded-md border-white border-2 border-solid p-2 w-fit"
        onClick={clickEvent}
      >
        <div className="h-[3px] text-center bg-white mt-[3px] mb-[2px] w-[21px]"></div>
        <div className="h-[3px] text-center bg-white mt-[3px] mb-[2px] w-[18px]"></div>
        <div className="h-[3px] text-center bg-white mt-[3px] mb-[2px] w-[15px]"></div>
      </div>
    </>
  );
};

export default Hamburger;
