import Accordion from "./Accordian";
import Comments from "./Comments";
import Cover from "./Cover";
import DiscoverEvent from "./DiscoverEvent";
import Futures from "./Futures";
import GetStated from "./GetStated";

function Home() {
  return (
    <div className="px-6">
      <Cover />
      <DiscoverEvent />
      <GetStated/>
      <Futures/>
      <Comments/>
      <Accordion />
    </div>
  );
}

export default Home;
