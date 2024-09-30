import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

senote:string="";
options=["All","Cow Milk","Cheese","Yogurt","Frozen","Cream"];
@Output()
searchNote:EventEmitter<string>=new EventEmitter<string>()
@Output()
category:EventEmitter<string>=new EventEmitter<string>()
value:string=""

constructor(){}
  ngOnInit(): void {
  
  }

searchInput(){
  this.searchNote.emit(this.senote);
  this.senote="";
}
filterCategory(){
  this.category.emit(this.value)
  this.value="";
}
}
