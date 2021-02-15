import { Component, OnInit } from '@angular/core';
import { ArchivesService } from '../archives.service';

@Component({
  selector: 'mof-embeded',
  templateUrl: './embeded.component.html',
  styleUrls: ['./embeded.component.scss']
})
export class EmbededComponent implements OnInit {

  constructor(public ars:ArchivesService) { }

  ngOnInit(): void {
  }
  close()
  {
    this.ars.showEmbeded =false;
    this.ars.embeded='';
  }

  print() {
    window.focus();
    window.print();
    }

}
