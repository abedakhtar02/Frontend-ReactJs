import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");

  const Reset =() =>{
    setColor("pink")
  }

  // const Green = () => {
  //   setColor((color) => "green");
  // };
  const Blue = () => {
    setColor((color) => "blue");
  };
  const Orange = () => {
    setColor((color) => "orange");
  };
  const Red = () => {
    setColor((color) => "red");
  };
  return (
    <div
      className=" w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap bottom-10 justify-center inset-x-0 bg-white text-black px-2 py-4 rounded-4xl gap-10">
        <div onClick={Reset} className="px-3 py-2 cursor-pointer">
          Reset
        </div>
        {/* here we used callback functio to directly change the bgColor */}
        <div onClick={()=>setColor("green")} className="px-3 py-2 bg-green-600 cursor-pointer rounded-3xl ">
          Green
        </div>
        <div onClick={Blue} className="px-3 py-2 cursor-pointer rounded-3xl bg-blue-600">Blue</div>
        <div onClick={Orange} className="px-3 py-2 cursor-pointer rounded-3xl bg-orange-600">Orange</div>
        <div onClick={Red} className="px-3 py-2 cursor-pointer rounded-3xl bg-red-600">Red</div>
      </div>
    </div>
  );
}

export default App;
