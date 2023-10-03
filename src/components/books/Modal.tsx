import { useAppDispatch, useTypedSelector } from "../../redux/hooks";
import { toggle } from "../../redux/booksModalSlice";

function Modal() {
    const dispatch = useAppDispatch();
    const modal = useTypedSelector(state => state.booksModal);
    console.log(modal.book)
    return (
        <div className={modal.isActive ? 'Modal active' : 'Modal'} onClick={() => dispatch(toggle(""))}>
            <div className="Main" onClick={e => e.stopPropagation()}>
                <img src={modal.book?.volumeInfo?.imageLinks?.thumbnail} alt="book cover" />
                <div className="Content">
                    <h6>{modal.book?.volumeInfo?.title}</h6>
                    <p>Категории: {modal.book?.volumeInfo?.categories?.map((item: string) => <span>{item} </span>)}</p>
                    <p>Авторы: {modal.book?.volumeInfo?.authors?.map((item: string) => <span>{item} </span>)}</p>
                    <p className="Description">{modal.book?.volumeInfo?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;