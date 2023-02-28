export const API_INGRIDIENTS = 'https://norma.nomoreparties.space/api/ingredients'
export const API_ORDER = 'https://norma.nomoreparties.space/api/orders'
export const API_FORGOT_PASSWORD = 'https://norma.nomoreparties.space/api/password-reset'
export const API_RESET_PASSWORD = ' https://norma.nomoreparties.space/api/password-reset/reset'
export const CheckRes = result => {
    if (result.ok) {
        return result.json();
    }
    return Promise.reject(`Ошибка ${result.status}`);
}
export const getIngridientsAPI = async () => {
    return await fetch(API_INGRIDIENTS, {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
    .then((data) => CheckRes(data))
}
export const getOrderAPI = async (ingridientsId) => {
    return await fetch(API_ORDER, {
        method: 'POST',
        body: JSON.stringify({
            ingredients: ingridientsId
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((data) => CheckRes(data))
}

export const forgotPasswordAPI = async (email) => {
    return await fetch(API_FORGOT_PASSWORD, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(email)
    })
    .then((data) => CheckRes(data))
}

export const resetPasswordAPI = async (password, token) => {
    return await fetch(API_FORGOT_PASSWORD, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(password, token)
    })
    .then((data) => CheckRes(data))
}