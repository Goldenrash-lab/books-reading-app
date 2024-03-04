const InputForm = ({ label, placeholder, type, name, register, errors }) => {
    return (
        <label className="mb-5 flex flex-col  text-sm">
            <div className="mb-2 after:ml-0.5 after:text-[red] after:content-['*']">
                {label}
            </div>
            <input
                {...register(name)}
                className="h-[42px] w-[280px] bg-[#F5F7FA] p-3 text-deepBlue shadow-inner tablet:w-80"
                name={name}
                type={type}
                placeholder={placeholder}
                required
            />

            <p className="text-[red]">{errors}</p>
        </label>
    )
}

export default InputForm
