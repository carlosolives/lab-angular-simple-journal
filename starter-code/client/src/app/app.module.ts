import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleEntryComponent} from './single-entry/single-entry.component';

import { Routes, RouterModule } from "@angular/router";
import { EntriesService } from './services/entries.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component:  EntryListComponent },
  { path: 'entrie/:id', component: SingleEntryComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers:[EntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
