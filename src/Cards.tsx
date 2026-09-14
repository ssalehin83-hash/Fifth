
import { use } from "react";
import type { Ione } from "./types/onetype";
import Availablecards from "./Availablecards";
interface OneProps{
    onePromise:Promise<Ione[]>;
}


const Cards = ({onePromise}:OneProps)=> {
    const users= use(onePromise)
    return <div>
         <div className="ml-[120px] ">
            <h2 className="font-bold text-5xl">Explore the <p className="text-[#EC4899] ">Technologies</p></h2>
            <p className="my-[30px] ">Pick one technology per category to build your ideal stack.</p>
        </div>
        <Availablecards users={users}></Availablecards>
    </div>
          
        
    ;
};

export default Cards;