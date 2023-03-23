import images from "../../constants/images";
import { Link, useLocation } from "react-router-dom";

const Aside = () => {
  const { pathname } = useLocation();

  return (
    <aside className="aside pt-[37px]">
      <Link to={"/dashboard"} className="mb-[40px] ">
        <img
          className="object-contain max-w-40 h-full max-h-11 ml-4 "
          src={`../../assets/${images.logo}`}
        />
      </Link>

      <div className="flex flex-col align-stretch gap-y-[25px] mt-[40px]">
        <h4 style={{ fontSize: 12 }} className="text-muted uppercase pl-4">
          Pages
        </h4>
        {[
          {
            to: "/dashboard",
            img: images.dashboard,
            label: "Dashboard",
          },
          {
            to: "/users",
            img: images.user,
            label: "Users",
          },
          {
            to: "/sales",
            img: images.sales,
            label: "Sales",
          },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className={`text-[#a7afbc] w-full flex items-center p-4 rounded-xl ${
              pathname === item.to ? "bg-light" : ""
            }`}
          >
            <img
              src={`../../assets/${item.img}`}
              className="object-contain h-[16px] w-[16px] mr-4 text-[#a7afbc]"
            />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Aside;
