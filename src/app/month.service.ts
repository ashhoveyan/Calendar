import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthService {

  constructor() { }
  monthArr:string[]=[
    'January','February', 'March','April','May','June','July','August','September', 'October','November','December'
  ]


  Arr:string[]=[];
  date:Date=new Date;
  day:any=this.date.getDay()
  index:number=1;
  month:string=this.monthArr[this.date.getMonth()];
  monthNumber:number=this.date.getMonth()+1
  year:number=this.date.getFullYear()
  lastDay: any =new Date(this.date.getFullYear(), this.date.getMonth()+this.index,0).getDate()
  lastDayArr=new Array(this.lastDay)


  daysBlocks(){
    for(let i=1; i<this.day; i++){
      this.Arr.push(" ")
    }
  }
  nextMonth(){
    if (this.monthNumber===12) {
      this.monthNumber = 0
      this.year += 1
      this.month = this.monthArr[this.date.getMonth() - 11]
    }
    this.month=this.monthArr[this.monthNumber++]
    let firstDay =new Date(this.date.getFullYear(), this.date.getMonth()+ this.index, 1);

    this.day=firstDay.getDay()
    this.day = this.day - 1
    if(this.day<0){
      this.day=6
    }
    this.Arr=[]
    this.daysBlocks()
    this.lastDay=new Date(this.date.getFullYear(), this.date.getMonth()+ this.index++,0).getDate()
    this.lastDayArr=new Array(this.lastDay)
  }

  previousMonth(){
    if (this.monthNumber===1) {
      this.monthNumber = 13
      this.year -= 1
      this.month = this.monthArr[this.date.getMonth() + 11]
    }
    this.month=this.monthArr[--this.monthNumber - 1]
    let firstDay =new Date(this.date.getFullYear(), this.date.getMonth()- this.index--, 1);
    this.day=firstDay.getDay()
    this.Arr=[]
    this.daysBlocks()
  }



}
