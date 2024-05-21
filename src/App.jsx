import Button from "./Components/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
};
export default App;
