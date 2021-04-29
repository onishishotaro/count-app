import CountButton from "./CountButton";

const App = () => {
  return (
    <>
      <h1>カウントアプリ</h1>
      <CountButton text="+1" num={1} />
      <CountButton text="+2" num={2} />
      <CountButton text="+3" num={3} />
      <CountButton text="+4" num={4} />
      <CountButton text="+5" num={5} />
    </>
  );
};

export default App;
