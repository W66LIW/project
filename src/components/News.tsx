import { useEffect, useState } from "react";

interface INews {
    author: string;
    id: number;
    image: string;
    language: string;
    sentiment: number;
    source_country: string;
    summary: string;
    text: string;
    title: string;
    url: string
}

function News() {
    const [arrOfNews, setArrOfNews] = useState<INews[] | string>("No news");
    useEffect(() => {
        fetchNews();
    }, [])

    const url = "https://worldnewsapi.com/downloads/world-news-api-openapi-3.json";
    async function fetchNews() {
        await fetch(url)
        .then((response) => response.json())
        .then((json) => {
            setArrOfNews(json.paths["/search-news"].get.responses[200].content["application/json"].schema["x-examples"].
        News_List_Example.news)
    });
    }
   
    console.log(arrOfNews)
    return(
        <div className="News dark:text-slate-300">
            { typeof arrOfNews === "string" ? 
            <p>{arrOfNews}</p> :
            arrOfNews?.map((news) => {
                return <div key={news.id}>
                    <img src={news.image} alt="image" className="w-96 mb-2"/>
                    <p>{news.text}</p>
                    <hr/>
                </div>
            })}
        </div>
    )
}

export default News;