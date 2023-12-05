export const InputWrapper = (value, type, defaultVal = "", func) => {
    return (
        <input
            type={type}
            name={value}
            value={defaultVal}
            onChange={(e) => {
                func(e.target.value);
            }}
            className="w-[300px] input solid success placeholder:text-black"
            placeholder={value}
            autoComplete="off"
        />
    );
};