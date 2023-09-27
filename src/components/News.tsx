import { useGetAllNewsQuery } from "../services/newsService";
import OneNews from "./OneNews";
import { INews } from "../types";

function News() {

    // const url = "https://worldnewsapi.com/downloads/world-news-api-openapi-3.json";
    // async function fetchNews() {
    //     await fetch(url)
    //     .then((response) => response.json())
    //     .then((json) => {
    //         setArrOfNews(json.paths["/search-news"].get.responses[200].content["application/json"].schema["x-examples"].
    //     News_List_Example.news)
    // });
    // } // без RTK query
    
    const {data, error, isLoading} = useGetAllNewsQuery("");
    const arrOfNews = data?.paths["/search-news"].get.responses[200].content["application/json"].schema["x-examples"].
         News_List_Example.news;
    
    return(
        <div className="News dark:text-slate-300">
            {error && <h3>Error</h3>}
            {isLoading && <h3>Loading ...</h3>}
            {arrOfNews?.map((news:INews) => 
            <OneNews news={news} key={news.id}/>
            )}
        </div>
    )
}

export default News;