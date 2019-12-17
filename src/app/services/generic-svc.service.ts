import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export class GenericSVCService<T> {

  protected dataSubject:BehaviorSubject<T[]> = new BehaviorSubject<T[]>([])
  data:Observable<T[]> = this.dataSubject.asObservable()



  constructor(private http:HttpClient, private api:string) {
    
    this.api = "https://jsonplaceholder.typicode.com/" + this.api
    this.http.get<T[]>(this.api).subscribe(arr => this.dataSubject.next(arr))

  }

  addNewItem(item:T){
    let dynamicItems = localStorage[this.api] ? 
      JSON.parse(localStorage[this.api]) : [];

    let AllItems = this.dataSubject.value

    dynamicItems.push(item)
    localStorage[this.api] = JSON.stringify(dynamicItems)

    AllItems.push(item)
    this.dataSubject.next(AllItems)
  }
  
}