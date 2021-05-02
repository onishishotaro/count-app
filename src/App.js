import CountButton from "./CountButton";

const App = () => {
  return (
    <>
      <section style={{ paddingTop: "50px" }}>
        <h1 className="ui container">カウントアプリ</h1>
        <div className="ui container" style={{ display: "flex" }}>
          <CountButton text="+1" num={1} />
          <CountButton text="+2" num={2} />
          <CountButton text="+3" num={3} />
          <CountButton text="+4" num={4} />
          <CountButton text="+5" num={5} />
        </div>
      </section>
    </>
  );
};

export default App;
