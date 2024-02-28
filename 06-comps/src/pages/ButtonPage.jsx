import Button from "../components/Button";
import { GoBell, GoDatabase, GoDependabot } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => console.log("clicked");

  return (
    <div>
      <div>
        <Button primary outline rounded onClick={handleClick} className="mb-5">
          <GoBell />
          Click Here
        </Button>
      </div>
      <div>
        <Button
          secondary
          rounded
          onMouseEnter={() => console.log("mouse over")}
        >
          <GoDependabot />
          Click Here
        </Button>
      </div>
      <div>
        <Button success outline onMouseLeave={() => console.log("mouse leave")}>
          <GoDatabase />
          Click Here
        </Button>
      </div>
      <div>
        <Button warning outline>
          Click Here
        </Button>
      </div>
      <div>
        <Button danger outline>
          Click Here
        </Button>
      </div>
      <div>
        <Button rounded>Click Here</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
