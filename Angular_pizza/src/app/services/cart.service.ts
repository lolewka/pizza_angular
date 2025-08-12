import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    //будет хранится название нашего товара
    product: string = '';
    constructor() {
    }
}
