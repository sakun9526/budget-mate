const Header = () => {
  return (
    <>
      <div className="w-full bg-blue-950 p-4 text-white flex flex-row justify-between">
        <h1 className="text-lg font-sans font-bold">BUDGET MATE 📊🧾</h1>
        <a onClick={() => console.log('clicked')} className={'cursor-pointer'}>Add Entry</a>
      </div>
    </>
  );
}

export default Header