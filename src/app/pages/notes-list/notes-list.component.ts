import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.module';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  notes :Note[]=new Array<Note>();

  cardTitle:string='deneme1';
  bodyContent:string='asdasd lorem5'
  constructor(private notesService:NotesService) { }

  ngOnInit() {

    //we want to retrieve all notes from NotesService
    this.notes= this.notesService.getAll();
  }

}
