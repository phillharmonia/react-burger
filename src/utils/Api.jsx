export const Api = {
    url: 'https://norma.nomoreparties.space/api/ingredients',
    headers: {
        'Content-Type': 'aplication.json'
    }
}
export const CheckRes = result => {
        if (result.ok) {
            return result.json();
        }
        return Promise.reject(`Ошибка ${result.status}`);
}