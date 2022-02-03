import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/model/Member';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class DrawingService {
  awsUrl = environment.awsUrl;
  constructor(
    private http: HttpClient
  ) {

  }
  postMemberItemListToSave(memberList: Member[]){
    return this.http.post(this.awsUrl + '/api/members', memberList)
  }
  getMembers():Observable<Member[]>{
    return this.http.get(this.awsUrl + '/api/members') as Observable<Member[]>;
  }
  transformToMemberItemList(menu:string){
    const list = menu.split(/\r?\n/);
    const memberItemList: Member[] = list.map((name,index) => {
      return {
        id: uuidv4(),
        index,
        name,
        rewardId:0
      }
    });
    return memberItemList;
  }
}
