import GoogleIcon from "../../images/GoogleIcon";

const GoogleButton = () => {
  return (
    <button
      className="flex relative justify-center mb-7 items-center text-base shadow-md  w-[150px] h-10 bg-[#F5F7FA] font-[Roboto] font-bold text-[#707375]"
      type="button"
    >
      <GoogleIcon width="18" height="18" />
      Google
    </button>
  );
};

export default GoogleButton;
