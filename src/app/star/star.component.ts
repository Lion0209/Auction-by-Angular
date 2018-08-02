import { Component, OnInit, Input, Output ,EventEmitter, OnChanges} from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {

  @Input()
  private rating:number=0;

  private stars:boolean[];

  @Input()
  private readonly:boolean = true;

  @Output()
  private ratingChange:EventEmitter<number>=new EventEmitter();

  constructor() { }

  ngOnInit() {
    // this.stars=[];
    // for(let i=1;i<=5;i++){
    //   this.stars.push(i>this.rating);
    // }
    // this.stars=[true,true,false,true,true];
  }

  clickStar(index:number){
    if(!this.readonly){
      this.rating=index+1;
      //this.ngOnInit();
      this.ratingChange.emit(this.rating);
    }
  }

  ngOnChanges(){
    this.stars=[];
    for(let i=1;i<=5;i++){
      this.stars.push(i>this.rating);
    }
  }

}
