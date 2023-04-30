export type TIngridient = {
    _id: string;
    __v: number;
    name: string;
    type: string;
    image: string;
    price:number;
    fat: number;
    proteins: number;
    carbohydrates: number;
    calories: number;
    image_mobile: string;
    image_large: string;
    uuid: string;
    length?: number;
    index?: number;
}

export type TUser = {
    email: string;
    name: string;
    createdAt?: string;
    updatedAt?: string;
}

export type TModal = {
    children?: JSX.Element;
    closePopup: () => void;
}

export type TModalOverlay = {
    closePopup: () => void;
}