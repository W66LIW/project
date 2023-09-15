import { useState } from "react";
import { INews } from "../types/INews";

interface OneNewsProps {
    news: INews
}

function OneNews ({news}:OneNewsProps) {
    const [on, setOn] = useState(false);
    if(news.id === 576) {
        return null;
    }
    return (
        <div key={news.id} className="OneNews">
                    <img src={news.image} alt="image" className="w-96 mb-2"/>                           
                    <p className="indent-8">{on ? news.text : news.summary}</p>
                    <button onClick={() => setOn(!on)}>{on ? "show less" : "show more"}</button>
                    <hr/>
        </div>
    )}
export default OneNews