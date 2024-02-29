import ArrowIconEnter from "../../images/ArrowEnterIcon";
import BookIcon from "../../images/BookIcon";
import FlagIcon from "../../images/Flagicon";

const GuideLibrary = () => {
  return (
    <section className="flex justify-center w-full mt-10 ">
      <div className=" py-10 pl-10 pr-[102px] bg-[white] shadow-md">
        <ul className="text-[#242A37]">
          <li className="mb-6">
            <h3 className="text-[19px] font-semibold mb-[16px]">Крок 1.</h3>
            <p className="flex  gap-3 text-[16px] font-semibold mb-2">
              <BookIcon /> Створіть особисту бібліотеку
            </p>
            <span className="flex gap-2 text-[#898F9F] text-[14px]">
              <ArrowIconEnter />
              Додайте до неї книжки, які маєте намір прочитати.
            </span>
          </li>
          <li>
            <h3 className="text-[19px] font-semibold mb-[16px]">Крок 2.</h3>
            <p className="flex  gap-3 text-[16px] font-semibold mb-2">
              <FlagIcon /> Сформуйте своє перше тренування
            </p>
            <span className="flex gap-2 text-[#898F9F] text-[14px]">
              <ArrowIconEnter />
              Визначте ціль, оберіть період, розпочинайте тренування.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default GuideLibrary;
