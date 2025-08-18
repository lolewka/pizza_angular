import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";
import {HttpClient} from "@angular/common/http";
import {map, Observable, pipe, tap,} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private products: ProductType[] = []

    constructor(private http: HttpClient) {
    }


    getProducts(): Observable<ProductType[]> {
        return this.http.get<{ data: ProductType[] }>('http://testologia.site/pizzas?extraField=1', {
            observe: 'response'
        })
            .pipe(
                tap(result => {
                    console.log(result)
                }),
                map((result) => (result.body ? result.body.data : [])),
            );
    }

    getProduct(id: number): ProductType | undefined {
        return this.products.find(item => (item.id === id));
    }
}
