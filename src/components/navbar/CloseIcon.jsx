const CloseIcon = ({ clickEvent }) => {
  return (
    <>
      <div
        className="cursor-pointer flex flex-col items-center justify-center rounded-md border-white border-2 border-solid pt-0 p-2 w-fit"
        onClick={clickEvent}
      >
        <div className="text-white text-3xl w-[21px] flex items-center justify-center">
          x
        </div>
      </div>
    </>
  );
};

export default CloseIcon;
