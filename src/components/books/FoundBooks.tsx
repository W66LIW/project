import { useState } from "react";
import { useGetBooksQuery } from "../../services/booksService";
import { IBooksProps } from "../../types";

function FoundBooks({value}: IBooksProps) {
    const {data: books, error, isLoading} = useGetBooksQuery(value);
    const items = books?.items;  
    const totalItems = books?.totalItems;       
    //const {items, totalItems} = books; // не успевает подгрузиться 
    console.log(books)  
    console.log(totalItems)
    return(
            error ? <h3>Error</h3> :
            isLoading ? <h3>Loading ...</h3> :
            totalItems ? <div className="Items">
                        {items?.map((item:any) => 
                            <div key={item.id}>
                                <img src={item.volumeInfo.imageLinks?.thumbnail} alt="_book cover" />
                                <p>{item.volumeInfo.title}</p>
                            </div>)}
                        </div> : 
                        <div>Not found</div>
            )
}

export default FoundBooks;