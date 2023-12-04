export const InputWrapper = (value, type, defaultVal = "", func) => {
    return (
        <input
            type={type}
            name={value}
            value={defaultVal}
            onChange={(e) => {
                func(e.target.value);
            }}
            className="w-[190px] h-auto p-2 rounded-sm border-2 border-solid border-[#000000] m-2 outline-none font-tiltNeon bg-transparent text-xl placeholder:text-black"
            placeholder={value}
            autoComplete="off"
        />
    );
};