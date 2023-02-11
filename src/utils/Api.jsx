export const API_INGRIDIENTS = 'https://norma.nomoreparties.space/api/ingredients'
export const API_ORDER = 'https://norma.nomoreparties.space/api/orders'
export const CheckRes = result => {
    if (result.ok) {
        return result.json();
    }
    return Promise.reject(`Ошибка ${result.status}`);
}
export const getIngridientsAPI = async () => {
    const data = await fetch(API_INGRIDIENTS, {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
    return CheckRes(data)
}
export const getOrderAPI = async (ingridientsId) => {
    const res = await fetch(API_ORDER, {
        method: 'POST',
        body: JSON.stringify({
            ingredients: ingridientsId
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return CheckRes(res);
}