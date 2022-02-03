import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class DrawingService {
  awsUrl = 'https://njbejkxy54.execute-api.ap-northeast-2.amazonaws.com'
  constructor(
    private http: HttpClient
  ) {
    this.http.get(this.awsUrl + '/member-menu').subscribe(console.log)
  }
  postMemberItemListToSave(memberItemList: MemberItem[]){
    return this.http.post(this.awsUrl + '/members', memberItemList)
  }
  transformToMemberItemList(menu:string){
    const list = menu.split(/\r?\n/);
    const memberItemList: MemberItem[] = list.map((name,index) => {
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

interface MemberItem{
  id:string;
  index:number;
  name:string;
  rewardId:number;
}
