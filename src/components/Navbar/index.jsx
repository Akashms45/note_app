import logo from "../../assest/logo1.png";
import "../../App.css";

export const Navbar = () => {
  return (
    <header className=" flex px-3 py-2 gap-3 border-b-4 border-gray-200">
      <div className="w-12 h-12">
        <img className="w-full h-full" src={logo} alt="logo" />
      </div>
      <h1 className="text-indigo-800 text-4xl font-bold">NOTE-IF</h1>
    </header>
  );
};
