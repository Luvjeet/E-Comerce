import "./Loader.css";

const Loader = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center ">
      <section id="global">
        <div id="top" className="mask">
          <div className="plane"></div>
        </div>
        <div id="middle" className="mask">
          <div className="plane"></div>
        </div>

        <div id="bottom" className="mask">
          <div className="plane"></div>
        </div>
        <p className="mt-12">LOADING...</p>
      </section>
    </div>
  );
};

export default Loader;
