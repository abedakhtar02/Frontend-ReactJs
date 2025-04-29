import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);

  const [pass, setPass] = useState("");
  const passwordRef = useRef(null);


//useCallback is used when we want to cache/memorize some callback function so it is not re-created upon every render.
  const passGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*()_+-=}{[];?><~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }

    setPass(password);
  }, [length, number, char, setPass]);

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current.select();
    window.navigator.clipboard.writeText(pass)

  },[pass])


  //useEffect is used when we want to fetch data during loading.
  useEffect(()=>{
      passGenerator();
  },[length, number, char, passGenerator])

  return (
    <>
      <div className="bg-black w-screen h-screen flex flex-wrap justify-center items-center">
        {/* <h4>Password Generator</h4> */}

        <div className="relative bg-gray-800 w-[450px] h-[200px]  flex flex-wrap justify-center items-center  rounded-2xl ">
          <div className=" flex flex-wrap max-w-96 justify-center items-center ">
            <span className="flex mb-5">
              <input
                type="text"
                value={pass}
                placeholder="Password"
                readOnly
                ref={passwordRef}
                className="text-black bg-gray-200 p-2  w-[300px] h-[40px]  rounded-l-xl "
              />
              <div 
              onClick={copyPasswordToClipBoard}
              className=" flex flex-wrap text-white font-semibold bg-blue-700 h-[40px] w-[70px] justify-center items-center rounded-r-xl">
                Copy
              </div>
            </span>

            <div className="flex flex-wrap justify-between items-center gap-2">
              <label className="">{length}</label>

              <input
                type="range"
                min={8}
                max={20}
                value={length}
                className="cursor-pointer "
                onChange={(e) => {
                  setLength(Number(e.target.value));
                }}
              />
              <input
                type="checkbox"
                name="number"
                className="inline items-center cursor-pointer"
                onChange={()=>{
                  setNumber((prev)=>!prev)
                }}
              />
              <label htmlFor="number">Number</label>

              <input
                type="checkbox"
                defaultChecked={number}
                onChange={() => {
                  setChar((prev) => !prev);
                }}
                className="inline items-center cursor-pointer"
              />
              <label htmlFor="character">Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
