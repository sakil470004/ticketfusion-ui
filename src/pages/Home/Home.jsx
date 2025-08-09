import { useEffect, useState } from "react";
import Accordion from "./Accordian";
import Comments from "./Comments";
import Cover from "./Cover";
import DiscoverEvent from "./DiscoverEvent";
import Futures from "./Futures";
import GetStated from "./GetStated";
import Statistics from "./Statistics";

function Home() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://ticketfusion-server.vercel.app/comments")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.reverse();
        
        setComments(newData.slice(4, 8));
        // todo:for the future I need to fix this comments problem here is other comments code needed
        // const shuffleArray = (array) => {
        //   for (let i = array.length - 1; i > 0; i--) {
        //     const j = Math.floor(Math.random() * (i + 1));
        //     [array[i], array[j]] = [array[j], array[i]];
        //   }
        //   return array;
        // };

        // // Set shuffled rows
        // setComments(shuffleArray(data)?.slice(0, 4));
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
      <Statistics />
    </div>
  );
}

export default Home;
