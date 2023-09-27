import { useTypedSelector } from "../../redux/hooks";
import FindBook from "./SearchBookBook";
import FoundBooks from "./FoundBooks";

function Books() {
    let value = useTypedSelector(state => state.searchBook);
    console.log(value)
    return (
        <div className="Books">
            <FindBook/>
            {value && <FoundBooks value={value}/>}
            </div>
    )
    }

export default Books;