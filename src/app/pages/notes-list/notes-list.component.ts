import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  cardTitle:string='deneme1';
  bodyContent:string='asdasd lorem5'
  constructor() { }

  ngOnInit() {
  }

}
