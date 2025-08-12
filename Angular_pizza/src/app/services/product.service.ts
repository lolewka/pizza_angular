import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private products: ProductType[] = [
        {
            id: 1,
            image: 'pizza-1.png',
            title: 'Мясная Делюкс',
            description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
        }, {
            id: 2,
            image: '',
            title: 'Морская Премиум',
            description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
        }, {
            id: 3,
            image: 'pizza-3.png',
            title: 'Бекон и Сосиски',
            description: 'Бекон, сыр, сосиски, ананас, томатная паста',
        }, {
            id: 4,
            image: 'pizza-4.png',
            title: 'Куриная Делюкс',
            description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
        }, {
            id: 5,
            image: 'pizza-5.png',
            title: 'Барбекю Премиум',
            description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
        }, {
            id: 6,
            image: 'pizza-6.png',
            title: 'Пепперони Дабл',
            description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
        }, {
            id: 7,
            image: 'pizza-7.png',
            title: 'Куриное трио',
            description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
        }, {
            id: 8,
            image: 'pizza-8.png',
            title: 'Сырная',
            description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
        },
    ]

    constructor() {
    }


    getProducts(): ProductType[] {
        return this.products;
    }

    getProduct(id: number): ProductType | undefined {
        return this.products.find(item => (item.id === id));
    }
}
