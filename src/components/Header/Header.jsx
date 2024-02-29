import BookIcon from "../../images/BookIcon";
import HomeIcon from "../../images/HomeIcon";
import iconUser from "/img/icon-user.jpg";

const Header = () => {
  return (
    <header className="shadow-md bg-[white]">
      <div className="px-4 flex justify-between items-center">
        <a
          className="py-4 font-[Arial-Fatface] text-xl text-[#242A37] font-black"
          href="/"
        >
          BR
        </a>
        <div className="flex items-center gap-3">
          <img src={iconUser} alt="iconUser" />
          <p>Martha Stewart</p>
        </div>
        <div className="flex items-center gap-3">
          <BookIcon />
          <HomeIcon />
          <button
            className="text-sm underline-offset-2 underline pl-[14px] border-l py-[6.5px] border-l-[#E0E5EB]"
            type="button"
          >
            Вихід
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
