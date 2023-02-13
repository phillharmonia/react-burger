export const ADD_INGRIDIENT = 'ADD_INGRIDIENT';
export const ADD_BUN = 'ADD_BUN';
export const MOVE_INGRIDIENT = 'MOVE_INGRIDIENT';
export const DELETE_INGRIDIENT = 'DELETE_INGRIDIENT'

export const moveIngridients = (dragIndex, hoverIndex, ingridients) => {
    return function(dispatch) {
        const dragItem = ingridients[dragIndex];
        const hoverItem = ingridients[hoverIndex];
        const movedIngridients = [...ingridients];
        movedIngridients[dragIndex] = hoverItem;
        movedIngridients[hoverIndex] = dragItem;
        dispatch({type: MOVE_INGRIDIENT, sort: movedIngridients})
    }
}