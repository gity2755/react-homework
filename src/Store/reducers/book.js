
const initialState = {
    arr: [
        { name: "aaa", code: 111, price: 100, author: "maya keynan" },
        { name: "bbb", code: 222, price: 200, author: "yona sapir" },
        { name: "ccc", code: 333, price: 300, author: "dvory rand" }
    ],
    selectedBook: null,
    selectedBookForEdit: null
}
export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                selectedBook: StaticRange.selectedBook,
                selectedBookForEdit: StaticRange.selectedBookForEdit,
                arr: [...state.arr, action.book]
            }

        case "DELETE_BOOK":
            return {
                selectedBook: state.selectedBook,
                selectedBookForEdit: state.selectedBookForEdit,
                arr: state.arr.filter(item => item.code != action.payload)
            }
        case "SELECT_BOOK_TO_READ":
            return {
                selectedBook: action.payload,
                selectedBookForEdit: state.selectedBookForEdit,
                arr: state.arr
            }
        case "SELECT_BOOK_FOR_EDIT":
            return {
                selectedBook: state.selectedBook,
                selectedBookForEdit: action.payload,
                arr: state.arr
            }
        case "SAVE_EDITED_BOOK":
            let copy = state.arr.map(item => {
                if (item.id !== action.payload.code)
                    return item;
                return action.payload;
            })
            return {
                selectedBook: state.selectedBook,
                selectedBookForEdit: null,
                arr: copy 
            }
        default: return state;

    }
}