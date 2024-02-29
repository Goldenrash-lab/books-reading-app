const AddBook = () => {
  return (
    <section className="mt-10">
      <div className="px-4">
        <form className="flex gap-4">
          <label
            htmlFor=""
            className=" min-w-[346px] flex flex-col text-[#898F9F]  font-medium text-sm"
          >
            Назва книги
            <input
              className="border-[#A6ABB9] border mt-2 bg-[#F6F7FB] outline-none focus-within:bg-[white] p-[12px] max-h-[42px]"
              type="text"
              name="bookName"
            />
          </label>
          <label
            htmlFor=""
            className=" min-w-[250px] flex flex-col text-[#898F9F]  font-medium text-sm"
          >
            Автор книги
            <input
              className="border-[#A6ABB9] border mt-2 bg-[#F6F7FB] outline-none focus-within:bg-[white] p-[12px] max-h-[42px]"
              type="text"
              name="authorBook"
            />
          </label>
          <label
            htmlFor=""
            className=" max-w-[134px] flex flex-col text-[#898F9F]  font-medium text-sm"
          >
            Рік випуску
            <input
              className="border-[#A6ABB9] border mt-2 bg-[#F6F7FB] outline-none focus-within:bg-[white] p-[12px] max-h-[42px]"
              type="text"
              name="year"
            />
          </label>
          <label
            htmlFor=""
            className=" max-w-[134px] flex flex-col text-[#898F9F]  font-medium text-sm mr-12"
          >
            Кількість сторінок
            <input
              className="border-[#A6ABB9] border mt-2 bg-[#F6F7FB] outline-none focus-within:bg-[white] p-[12px] max-h-[42px]"
              type="text"
              name="pages"
            />
          </label>
          <button
            className="mt-[28px] hover:bg-[#FF6B08] hover:border-[white] transition-colors duration-300 hover:text-[white] flex justify-center items-center border border-[#242A37] px-[63px] py-[12px] text-sm max-h-[42px]"
            type="button"
          >
            Додати
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddBook;
