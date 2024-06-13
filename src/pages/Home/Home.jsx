import Accordion from "./Accordian";
import Cover from "./Cover";
import DiscoverEvent from "./DiscoverEvent";

function Home() {
  return (
    <div className="px-6">
      <Cover />
      <DiscoverEvent />
      <Accordion />
    </div>
  );
}

export default Home;
