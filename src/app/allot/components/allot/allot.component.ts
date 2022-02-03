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
  constructor(
    private drawingService: DrawingService
  ) {
    const mstring = ['鄭宇佋', '黃傑', 'andy', 'amy'].join('\n');
    this.allotForm = new FormGroup({
      memberMenu: new FormControl(mstring, []),
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
    const memberMenu = this.allotForm.get('memberMenu')
    const memberItemList = this.drawingService.transformToMemberItemList(memberMenu?.value);
    console.log(memberItemList)
    this.drawingService.postMemberItemListToSave(memberItemList).subscribe((obres)=>{
      console.log(obres)
    })
  }
}
