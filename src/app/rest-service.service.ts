import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacts } from './Contacts';
import { PostPayload } from './post.payload';
import { UpdatePayload } from './update.payload';
import { Contact } from './Contact';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private httpClient: HttpClient ) { }



  get(id:number):Observable<Contacts[]>{
    return this.httpClient.get<Contacts[]>('http://localhost:8080/api/contacts/?pageNo='+id);
  }
  post(postPayload:PostPayload): Observable<boolean>{
    return this.httpClient.post<boolean>('http://localhost:8080/api/contacts/',postPayload);
  }
  update(updatePayload:UpdatePayload): Observable<boolean>{
    return this.httpClient.put<boolean>('http://localhost:8080/api/contacts/'+updatePayload.id,updatePayload);
  }
  delete(id:number): Observable<boolean>{
    return this.httpClient.delete<boolean>('http://localhost:8080/api/contacts/'+id);
  }
  getSingle(id:number): Observable<Contact>{
    return this.httpClient.get<Contact>('http://localhost:8080/api/contacts/'+id);
  }
  
  

}


