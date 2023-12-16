const Card = ({ imgSrc, text, category, setCategory }) => {
  return (
    <button onClick={() => { setCategory(text) }} className={`${category === text ? 'border-2 border-black rounded-md' : ''}`}>
      <div className="p-1 m-1 border-2 border-solid rounded-md cursor-pointer">
        <img src={imgSrc} alt="photo" className="w-[150px] h-auto" />
        <h1 className="m-1 text-black font-pacifico text-md">{text}</h1>
      </div>
    </button>
  );
};

export default Card;
