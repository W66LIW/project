import { useState } from "react";
import { useAppDispatch, useTypedSelector } from "../../redux/hooks";
import { toggle } from "../../redux/booksModalSlice";

function Modal() {
    const dispatch = useAppDispatch();
    const active = useTypedSelector(state => state.booksModal);
    console.log(active)
    return (
        <div className={active ? 'Modal active' : 'Modal'} onClick={() => dispatch(toggle())}>
            <div>
                {/* <img src={book.volumeInfo?.imageLinks?.thumbnail} alt="book cover" /> */}
            </div>
        </div>
    )
}

export default Modal;