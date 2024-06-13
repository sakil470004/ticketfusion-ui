import { useEffect, useState } from "react";
import Accordion from "./Accordian";
import Comments from "./Comments";
import Cover from "./Cover";
import DiscoverEvent from "./DiscoverEvent";
import Futures from "./Futures";
import GetStated from "./GetStated";

function Home() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/comments")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.reverse();
        setComments(newData.slice(4, 8));
      });
  }, []);
 
  return (
    <div className="px-6">
      <Cover />
      <DiscoverEvent />
      <GetStated/>
      <Futures/>
      <Comments comments={comments}/>
      <Accordion />
    </div>
  );
}

export default Home;
