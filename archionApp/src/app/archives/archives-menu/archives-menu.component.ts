import { Component, OnInit } from '@angular/core';
import { ArchivesService } from '../archives.service';

@Component({
  selector: 'mof-archives-menu',
  templateUrl: './archives-menu.component.html',
  styleUrls: ['./archives-menu.component.scss']
})
export class ArchivesMenuComponent implements OnInit {

  constructor(public ars :ArchivesService) { }

  ngOnInit(): void {
  }

}
