import { useTypedSelector, useAppDispatch } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { addBooks, clearBooks } from "../../redux/foundBooksSlice";
import { useGetBooksQuery } from "../../services/booksService";
import SearchBook from "./SearchBook";
import FoundBooks from "./FoundBooks";
import { changeCategory } from "../../redux/categorySlice";
import { changeSorting } from "../../redux/sortingSlice";
import Modal from "./Modal";

function Books() {
    const dispatch = useAppDispatch();
    let searchTerm = useTypedSelector(state => state.searchBook);
    const foundBooks = useTypedSelector(state => state.foundBooks); 
    const category = useTypedSelector(state => state.category);
    const sorting = useTypedSelector(state => state.sorting)
    const [startIndex, setStartIndex] = useState(0);
    
    const {data: books, error, isLoading} = useGetBooksQuery({searchTerm, startIndex, sorting, subject: category}, {
        skip: searchTerm.length < 2,
        refetchOnFocus: false,// true + setupListeners c store
    });
    useEffect(() => {
        dispatch(addBooks(books?.items ? books.items : []));
    }, [books]) 

    return (
        <div className="Books">
            <SearchBook/>
            <div className="Select">
                <select 
                value={category}
                onChange={(e) => {
                    dispatch(clearBooks())
                    dispatch(changeCategory(e.target.value))                    
                }}>
                    <option value="all">All</option>
                    <option value="art">Art</option>
                    <option value="biography">Biography</option>
                    <option value="computers">Computers</option>
                    <option value="history">History</option>
                    <option value="medical">Medical</option>
                    <option value="poetry">Poetry</option>
                    <option value="history">History</option>
                </select>
                <select 
                value={sorting}
                onChange={(e) => {
                dispatch(clearBooks())
                dispatch(changeSorting(e.target.value))
                }}>
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
                </select>
            </div>
            {error && <h3>Error</h3>}
            {isLoading && <h3>Loading ...</h3>}
            {books && <>
            <p>Всего найдено: {books?.totalItems}</p>
            <FoundBooks/>
            <button
            onClick={() => setStartIndex(startIndex + 30)}>Load more</button>
            </>}
            <Modal/>
            </div>
    )
    
}
export default Books;