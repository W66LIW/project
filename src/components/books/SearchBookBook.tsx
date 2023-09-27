import { change } from "../../redux/booksInputSlice";
import { useAppDispatch, useTypedSelector } from "../../redux/hooks";
import { changeSearch } from "../../redux/searchBookSlice";

function SearchBook() {
    const dispatch = useAppDispatch();
    const value = useTypedSelector(state => state.booksInput)
    return(
        <div className="SearchBook"
        onKeyDown={(e) => handleKeyDown(e)}>
            <div>
                <input type="text" 
                value={value}
                onChange={(e) => dispatch(change(e.target.value))}/>
                <button
                onClick={() => dispatch(changeSearch(value))}></button>
            </div>            
        </div>
    )

    function handleKeyDown(e: any) {
        if(e.code === "Enter") dispatch(changeSearch(value))
    }
}

export default SearchBook;