
import { use } from "react";
import type { Ione } from "./types/onetype";
interface OneProps{
    onePromise:Promise<Ione[]>;
}

const Cards = ({onePromise}:OneProps)=> {
    use(onePromise)
    return (

        <div className="ml-[120px] ">
            <h2 className="font-bold text-5xl">Explore the <p className="text-[#EC4899] ">Technologies</p></h2>
            <p className="my-[30px] ">Pick one technology per category to build your ideal stack.</p>
        </div>
        
    );
};

export default Cards;
