import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-allot',
  templateUrl: './allot.component.html',
  styleUrls: ['./allot.component.scss']
})
export class AllotComponent implements OnInit {

  constructor() { }

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
}
