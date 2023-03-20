import images from "../constants/images";
const Nav = () => {
  const languages = [
    {
      value: "english-uk",
      label: "English (UK)",
    },
    {
      value: "english-us",
      label: "English (US)",
    },
  ];

  return (
    <header>
      <nav className="py-7 container mx-auto flex bg-white justify-between items-center px-6 py-2 ">
        <img
          className="object-contain max-w-40 h-full max-h-11"
          src="../assets/logo.png"
        />

        <div className="w-max relative ">
          <select
            className=" appearance-none bg-light cursor-pointer outline-none pl-4 pr-14 py-3 text-muted  rounded-xxl"
            style={{ fontWeight: 500, fontSize: 12 }}
          >
            {languages.map((ln, index) => (
              <option value={ln.value} key={index}>
                {ln.label}
              </option>
            ))}
          </select>
          <img
            src={`../assets/${images.chevron}`}
            className="w-2.5 absolute right-3 top-4 translate-y-0.5"
            alt="down"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
