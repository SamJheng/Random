import { Member } from './../../../model/Member';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { DrawingService } from '../../service/drawing.service';
@Component({
  selector: 'app-allot',
  templateUrl: './allot.component.html',
  styleUrls: ['./allot.component.scss']
})
export class AllotComponent implements OnInit {
  allotForm: FormGroup;
  memberMenuText?:string;
  constructor(
    private drawingService: DrawingService
  ) {
    this.drawingService.getMembers().subscribe((res:Member[])=>{
      const members= res.map(member=>member.name);
      this.memberMenuText = members.join('\n');
      const memberMenu = this.allotForm.get('memberMenu');
      memberMenu?.setValue(this.memberMenuText);
    })
    this.allotForm = new FormGroup({
      memberMenu: new FormControl(this.memberMenuText, []),
    });
  }

  ngOnInit(): void {
  }
  dropped(files: NgxFileDropEntry[]) {
    console.log(files)
  }
  fileOver(event:any) {
    console.log(event);
  }

  fileLeave(event: any) {
    console.log(event);
  }
  onSubmit(){
    const memberMenu = this.allotForm.get('memberMenu');
    const memberItemList = this.drawingService.transformToMemberItemList(memberMenu?.value);
    console.log(memberItemList)
    this.drawingService.postMemberItemListToSave(memberItemList).subscribe((obres)=>{
      console.log(obres)
    })
  }
}
