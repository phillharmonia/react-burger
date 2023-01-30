export const API_INGRIDIENTS = 'https://norma.nomoreparties.space/api/ingredients'
export const API_ORDER = 'https://norma.nomoreparties.space/api/orders'
export const CheckRes = result => {
        if (result.ok) {
            return result.json();
        }
        return Promise.reject(`Ошибка ${result.status}`);
}