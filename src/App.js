import { useState } from "react";
import "./App.css";

function App() {
  const [charArray, setArray] = useState([
  { src: "/thumb1.jpg", name: "Mario", score: 5, bg: "url('/bg1.jpg')" },
  { src: "/thumb2.jpg", name: "Zelda", score: 4, bg: "url('/bg2.jpg')" },
  { src: "/thumb3.jpg", name: "Pokemon", score: 3, bg: "url('/bg3.jpg')" }])

  const clickHandle = (i) => {
    let cnt = [...charArray];
    cnt[i].score = cnt[i].score + 1;
    const sortArray = cnt.sort((a, b)=> (b.score - a.score));
    setArray(sortArray);

  }
  return (
    <div
      className="w-full h-full flex flex-col bg-slate-400 bg-custom bg-cover"
      style={{ background:process.env.PUBLIC_URL + charArray[0].bg }}
    >
      <h2 className="text-[100px] text-white text-center pt-10">
        Nintendo Score
      </h2>
      <div className="flex flex-row h-full px-20 justify-around items-center gap-10">
        {
          charArray.map((v, i)=> (
            <div className="text-center text-white mx-10">
            <img
              className="rounded-3xl"
              src={charArray[i].src}
              alt=""
            />
            <h1 className="text-[80px] " >{charArray[i].name}</h1>
            <h4 className="text-[40px]" onClick={()=>clickHandle(i)}>
              Score<span className="pl-4" >{charArray[i].score}</span>
            </h4>
        </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
