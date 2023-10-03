import { useTypedSelector } from "../../redux/hooks";
import Modal from "./Modal";

function FoundBooks() {
    const foundBooks = useTypedSelector(state => state.foundBooks.books);
    return(
        <div className="Items">
        {foundBooks.map((item:any) => 
        <div key={item.id}>
            <div className="OneBook"
            onClick={() => handleBookClik(item)}>
                <img src={item.volumeInfo.imageLinks?.thumbnail} alt="_book cover" />
                <h6>{item.volumeInfo.title}</h6>
                <p>Категория: {item.volumeInfo?.categories?.[0]}</p>
                <p>Авторы: {item.volumeInfo?.authors?.map((item: string) => <span>{item} </span>)}</p>
            </div>
        </div>)}
        </div> 
    )
    function handleBookClik(item: any) {
        return ""
    }
}

export default FoundBooks;