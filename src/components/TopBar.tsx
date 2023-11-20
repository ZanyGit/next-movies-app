import { Bars3Icon } from "@heroicons/react/24/outline";

const TopBar = ({ toggleShowSidebar }) => {
  return (
    <div className="w-full h-12 text-white  flex items-center sm:hidden fixed top-0 left-0 right-0 z-20 justify-between px-4 ">
      <h2 className=" font-bold text-xl">MOVIES</h2>
      <Bars3Icon
        className="w-12 h-12 "
        onClick={() => toggleShowSidebar((val) => !val)}
      />
    </div>
  );
};

export default TopBar;
