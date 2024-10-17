import "./App.css";

function App() {
  return (
    <div
      className="w-full h-full flex flex-col bg-slate-400 bg-custom bg-cover"
      style={{ background: `url('${process.env.PUBLIC_URL}/bg1.jpg')` }}
    >
      <h2 className="text-[100px] text-white text-center pt-10">
        Nintendo Score
      </h2>
      <div className="flex flex-row h-full px-20 justify-around items-center gap-10">
        <div className="text-center text-white mx-10">
          <img
            className="rounded-3xl"
            src={`${process.env.PUBLIC_URL}/thumb1.jpg`}
            alt=""
          />
          <h1 className="text-[80px]">Mario</h1>
          <h4 className="text-[40px]">
            Score<span className="pl-4">5</span>
          </h4>
        </div>
        <div className="text-center text-white mx-10">
          <img
            className="rounded-3xl"
            src={`${process.env.PUBLIC_URL}/thumb1.jpg`}
            alt=""
          />
          <h1 className="text-[80px]">Mario</h1>
          <h4 className="text-[40px]">
            Score<span className="pl-4">5</span>
          </h4>
        </div>
        <div className="text-center text-white mx-10">
          <img
            className="rounded-3xl"
            src={`${process.env.PUBLIC_URL}/thumb1.jpg`}
            alt=""
          />
          <h1 className="text-[80px]">Mario</h1>
          <h4 className="text-[40px]">
            Score<span className="pl-4">5</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
