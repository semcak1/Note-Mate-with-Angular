import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.module';
import { NotesService } from 'src/app/shared/notes.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations:[
    trigger('itemAnim',[
      //Entry Animation
      transition('void => *',[
        //initial state
        style({
            height:0,
            opacity:0,
            transform:'scale(0.85)',
            'margin-bottom':0,

            // we have to expand ouy the padding properties
            paddingTop:0,
            paddingBottom:0,
            paddingRight:0,
            paddingLeft:0,
        }),
        //we first want to animate the spacing (which includes height and margin)
        animate('50ms',style({
          height:'*',
          'margin-bottom':'*',
          paddingTop:'*',
          paddingBottom:'*',
          paddingRight:'*',
          paddingLeft:'*',
        })),
        animate(100)
      ]),
      transition('* => void',[
        //first sclae up
        animate(50,style({
          transform:'scale(1.05)'
        })),
        //then scale down to normal size
        animate(100,style({
          transform:'scale(1)',
          opacity:0.7,
        })),
        //scale down  and fade out completely
        animate('120ms ease-out',style({
          transform:'scale(0.68)',
          opacity:0,
        })),
        //then animate the spacing
        animate('100ms ease-out',style({
          height:0,
          opacity:0,
          paddingTop:0,
          paddingBottom:0,
          paddingRight:0,
          paddingLeft:0,
        }))
      ])
    ])
  ]
})
export class NotesListComponent implements OnInit {
  notes :Note[]=new Array<Note>();
  filteredNotess: Note[] = new Array<Note>();

  cardTitle:string='deneme1';
  bodyContent:string='asdasd lorem5'
  constructor(private notesService:NotesService) { }

  ngOnInit() {

    //we want to retrieve all notes from NotesService
    this.notes= this.notesService.getAll();
    this.filteredNotess=this.notes;
  }

  deleteNote(id:number){
    this.notesService.delete(id);
  }

  filter(query:string){
    query =query.toLowerCase().trim();

    let allResults: Note []= new Array<Note>();
    //split up the search query into individual words
    let terms : string[]=query.split(' ');//split on spaces
    //remove duplicate search terms
    terms =this.removeDuplicates(terms);
    // compile all relevant into the allResults array
    terms.forEach(term =>{
      let results:Note[] = this.releventNotes(term);
      // append results to the allResults array
      allResults=[...allResults,...results]
    })

    //allResults will include duplicate notes
    //vecause a particular note can be the results of many search terms
    //but we dont want to show the same note multiple times on the ui
    //so we first must remove the duplicates
    let uniqueResults = this.removeDuplicates(allResults);
    this.filteredNotess= uniqueResults;
  }

  removeDuplicates(arr:Array<any>):Array<any>{
    let uniqueResults : Set <any> = new Set<any>();
    //loop trough the input array and addd the items to the set
    arr.forEach(e=> {
      uniqueResults.add(e)
    });
    return Array.from(uniqueResults);
  }

  releventNotes(query:string): Array<Note>{
    query = query.toLowerCase().trim();
    let releventNotes = this.notes.filter(note =>
    {
      if (note.title && note.title.toLowerCase().includes(query))
        {
          return true;
        }
      if(note.body && note.body.toLowerCase().includes(query)){
          return true;
        }
      else {
        return false;
      }
    })
    return releventNotes;
  }

  sortByRelevancy(){
    
  }

}
