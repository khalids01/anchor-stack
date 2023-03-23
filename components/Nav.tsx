import { useAuth, useToken, useUser } from "../hooks";
import images from "../constants/images";
import { useState } from "react";

const Nav = () => {
  const { isLoggedIn } = useToken();
  const { me } = useUser();
  const { logout } = useAuth();
  const [showLogout, setShowLogout] = useState(false);

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

  if (isLoggedIn) {
    return (
      <header>
        <nav className="py-7 container-xl mx-auto flex bg-white justify-between items-center ">
          <div className="max-w-[540px] relative w-full">
            <input placeholder="search" className="search" />
            <img
              alt="search"
              src={images.search}
              className="placeholder:text-muted w-[18px] h-[18px] object-contain absolute top-5 right-6"
            />
          </div>

          <div className="flex items-center">
            <button className="bg-transparent border-none mr-[43px]">
              <img
                alt="notification"
                src={images.bell}
                className=" w-[25px] h-[25px] object-contain "
              />
            </button>

            <div className="relative">
              <button
                className="bg-transparent border-none"
                onClick={() => setShowLogout(!showLogout)}
              >
                {me?.avatar ? (
                  <img
                    alt="notification"
                    src={me.avatar}
                    className="w-[48px] h-[48px] rounded-full object-contain"
                  />
                ) : (
                  <div className="h-[48px] w-[48px] bg-light rounded-full flex justify-center items-center text-muted">
                    0
                  </div>
                )}
              </button>
              <button
                onClick={() => logout()}
                className={`absolute right-0 top-10 bg-border text-dark px-10 py-4 rounded-xl ${
                  showLogout ? "block" : "hidden"
                }`}
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header>
      <nav className="py-7 container-xl mx-auto flex bg-white justify-between items-center px-6 py-2 ">
        <img
          className="object-contain max-w-40 h-full max-h-11"
          src={images.logo}
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
            src={images.chevron}
            className="w-2.5 absolute right-3 top-4 translate-y-0.5"
            alt="down"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
