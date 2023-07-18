const Line = ({ width = "w-full", center = true }) => {
  return (
    <div
      className={`h-0.5 ${width} bg-white ${
        center ? "mx-auto my-6 md:my-12" : "my-6 md:my-12"
      }`}
    ></div>
  );
};

export default Line;
