import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers:[ EntriesService ]

})
export class EntryListComponent implements OnInit {

  entries: Array<Object>;

  constructor(private entriesService: EntriesService) { }

  ngOnInit() {
    this.entriesService.getEntrie()
      .subscribe((entries)=>{
        this.entries = entries;
      });
  }

}
