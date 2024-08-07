import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavLayout from "./NavLayout";

const HomeLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <NavLayout>
        <div className='flex gap-8 px pt-8 border-b border-[#e8e8e8]'>
          <span
            className={`text-sm lg:flex-none flex-1 pb-4 text-center lg:text-left cursor-pointer text-gray-600 ${
              pathname === "/"
                ? "border-b-[0.01rem] border-gray-600  font-semibold"
                : "font-medium"
            }`}
            onClick={() => navigate(`/`)}>
            Latest
          </span>
          <span
            className={`text-sm lg:flex-none flex-1 text-center lg:text-left pb-4 cursor-pointer  text-gray-600 ${
              pathname === "/feed-following"
                ? "border-b-[0.01rem] border-gray-600  font-semibold"
                : "font-medium"
            }`}
            onClick={() => navigate(`/feed-following`)}>
            Following
          </span>
        </div>
        <Outlet />
      </NavLayout>
    </div>
  );
};
export default HomeLayout;
