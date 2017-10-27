export function selectBook(book) {
    // return an action object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book,
    };
}