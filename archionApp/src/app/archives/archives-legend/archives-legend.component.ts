import { Component, OnInit } from '@angular/core';
import { ArchivesService } from '../archives.service';

@Component({
  selector: 'mof-archives-legend',
  templateUrl: './archives-legend.component.html',
  styleUrls: ['./archives-legend.component.scss']
})
export class ArchivesLegendComponent implements OnInit {

  constructor(public arc: ArchivesService) { }

  ngOnInit(): void {
  }

}
