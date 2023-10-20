const Card = ({ imgSrc, text }) => {
  return (
    <>
      <div className="cursor-pointer p-1 m-1 border-2 border-solid rounded-md">
        <img src={imgSrc} alt="photo" className="w-[150px] h-auto" />
        <h1 className="font-pacifico text-black text-md m-1">{text}</h1>
      </div>
    </>
  );
};

export default Card;
