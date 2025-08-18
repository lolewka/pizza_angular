import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map, Observable, pipe, tap,} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private products: ProductType[] = []

    constructor(private http: HttpClient) {
    }


    getProducts(): Observable<ProductType[]> {
        let params = new HttpParams();
        params = params.set('extraField', 1);
        return this.http.get<{ data: ProductType[] }>('http://testologia.site/pizzas', {
            headers: new HttpHeaders({
                Authorization: `auth-token`
            }),
            params: params
        })
            .pipe(
                tap(result => {
                    console.log(result)
                }),
                map((result) => (result.data)),
            );
    }

    getProduct(id: number): ProductType | undefined {
        return this.products.find(item => (item.id === id));
    }
}
