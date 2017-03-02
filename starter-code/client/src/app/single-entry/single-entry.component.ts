import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers:[ EntriesService ]
})
export class SingleEntryComponent implements OnInit {
  title: string;
  data: string;
  content: string;
  id : string;

  constructor(private entriesService : EntriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
    this.id = params['id'];
    });
    this.entriesService.getOneEntrie(this.id)
      .subscribe((item) => {
        this.title = item.title;
        this.data = item.data;
        this.content = item.content;});

  }

}
