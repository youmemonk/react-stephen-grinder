import Dropdown from "./components/Dropdown";

function App() {
  const options = [
    { label: "red", value: "red" },
    { label: "green", value: "green" },
    { label: "blue", value: "blue" },
    { label: "yellow", value: "yellow" },
  ];
  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
}

export default App;
