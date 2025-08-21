import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../../../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: ProductType[] = []

  constructor(private http: HttpClient) {
  }


  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('http://testologia.site/pizzas',)

  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`http://testologia.site/pizzas?id=${id}`);

    // return this.products.find(item => (item.id === id));
  }

  createOrder(data: { product: string, address: string, phone: string }) {
    return this.http.post<{ success: boolean, message?: string }>(`http://testologia.site/order-pizza`, data);
  }
}
