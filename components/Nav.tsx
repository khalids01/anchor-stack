const Nav = () => {
  return (
    <header>
      <nav className=" container mx-auto flex bg-slate-200 justify-between items-center px-6 py-2 ">
        <img
          className="object-contain max-w-40 h-full max-h-11"
          src="../assets/logo.png"
        />
        <select className="bg-light px-5 px-2 ">
          <option value={"english(uk)"}>English (UK)</option>
          <option value={"english(us)"}>English (US)</option>
        </select>
      </nav>
    </header>
  );
};

export default Nav;
