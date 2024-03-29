import { getCookie, setCookie } from "./Cookie";

const BASE_URL = "https://norma.nomoreparties.space/api";

export const API = {
    ingridients: `${BASE_URL}/ingredients`,
    order: `${BASE_URL}/orders`,
    forgotPassword: `${BASE_URL}/password-reset`,
    resetPassword: `${BASE_URL}/password-reset/reset`,
    register: `${BASE_URL}/auth/register`,
    login: `${BASE_URL}/auth/login`,
    profile: `${BASE_URL}/auth/user`,
    logout: `${BASE_URL}/auth/logout`,
    token: `${BASE_URL}/auth/token`,
};

export const checkResult = (result) => {
    if (result.ok) {
        return result.json();
    }
    return Promise.reject(`Ошибка ${result.status}`);
};

export const getIngridientsAPI = async () => {
    return await fetch(API.ingridients, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((data) => checkResult(data));
};

export const getOrderAPI = async (ingridientsId) => {
    return await fetch(API.order, {
        method: 'POST',
        body: JSON.stringify({
            ingredients: ingridientsId,
        }),
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${getCookie("accessToken")}`,
        },
    }).then((data) => checkResult(data));
};

export const forgotPasswordAPI = async (email) => {
    return await fetch(API.forgotPassword, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
    }).then((data) => checkResult(data));
};

export const resetPasswordAPI = async (password, token) => {
    return await fetch(API.resetPassword, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({password, token}),
    }).then((data) => checkResult(data));
};

export const registerAPI = async (name, email, password) => {
    return await fetch(API.register, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, password}),
    }).then((data) => checkResult(data));
};

export const loginAPI = async (email, password) => {
    return await fetch(API.login, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
    }).then((data) => checkResult(data));
};

export const getProfileAPI = async () => {
    return await fetch(API.profile, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${getCookie("accessToken")}`,
        },
    })
        .then((data) => checkResult(data));
}

export const patchProfileAPI = async (name, email, password) => {
    return await fetch(API.profile, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${getCookie("accessToken")}`,
        },
        body: JSON.stringify({name, email, password}),
    })
        .then((data) => checkResult(data));
}

export const logoutAPI = async (refreshToken) => {
    return await fetch(API.logout, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: refreshToken }),
    })
    .then((data) => checkResult(data))
}
export const updateTokenAPI = async (refreshToken) => {
    return await fetch(API.token, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: refreshToken }),
    }).then((data) => checkResult(data))
    .then((data) => {
        if (data.accessToken) {
            setCookie("accessToken", data.accessToken.split("Bearer ")[1]);
        }
        if (data.refreshToken) {
            setCookie("refreshToken", data.refreshToken);
        }
    })
}