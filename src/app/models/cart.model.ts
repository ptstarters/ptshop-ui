



export interface Food {
    id: number;
    title: string;
    price: string;
    oldPrice?: string;
    discount?: string;
    icon: string;
}

export interface CartItem {
    food: Food;
    quantity: number;
}
