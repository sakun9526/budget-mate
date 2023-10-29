const Footer = () => {
  return (
    <>
      <div className="w-full bg-gray-200 p-4 flex flex-col justify-centers items-center">
        <h3 className="text-md font-sans font-semibold">
          &copy; {`Copyright ${new Date().getFullYear()}. All rights received`}
        </h3>
        <p>
          Designed by <a href="https://sakun9526.github.io/">Sakun Rathnayaka</a>
        </p>
      </div>
    </>
  );
}

export default Footer