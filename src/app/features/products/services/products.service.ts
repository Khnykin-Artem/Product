import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, delay, catchError, throwError, retry, tap } from 'rxjs';
import { IProduct } from 'src/app/core/models/product';
import { ErrorService } from '../../../shared/services/error.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  products: IProduct[] = [];

  getAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
          fromObject: {
            limit: 5,
          },
        }),
      })
      .pipe(
        delay(200),
        retry(2),
        tap((products: IProduct[]) => (this.products = products)),
        catchError(this.errorHandler.bind(this))
      );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http
      .post<IProduct>('https://fakestoreapi.com/products', product)
      .pipe(tap((newProduct: IProduct) => this.products.push(newProduct)));
  }

  delete(id: number): Observable<IProduct> {
    return this.http
      .delete<IProduct>(`https://fakestoreapi.com/products/${id}`)
      .pipe(
        tap(() => {
          this.products.filter((product: IProduct) => product.id !== id);
        })
      );
  }
}
