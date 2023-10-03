import { change } from "../../redux/booksInputSlice";
import { clearBooks } from "../../redux/foundBooksSlice";
import { useAppDispatch, useTypedSelector } from "../../redux/hooks";
import { changeSearch } from "../../redux/searchBookSlice";

function SearchBook() {
    const dispatch = useAppDispatch();
    const value = useTypedSelector(state => state.booksInput)
    return(
        <div className="SearchBook"
        onKeyDown={(e) => handleKeyDown(e)}>
            <div>
                <div>
                    <input type="text" 
                    value={value}
                    onChange={(e) => dispatch(change(e.target.value))}/>
                    <button
                    onClick={() => search()}></button>
                </div> 
            </div>
                       
        </div>
    )

    function handleKeyDown(e: any) {
        if(e.code === "Enter") {
            dispatch(changeSearch(value));
            dispatch(clearBooks());
        }
    }

    function search() {
        dispatch(changeSearch(value));
        dispatch(clearBooks());
    }
}

export default SearchBook;