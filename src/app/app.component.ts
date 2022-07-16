import {Component, OnInit} from '@angular/core';
import {MonthService} from "./month.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'calendar';

  constructor(public monthService:MonthService) {}


  ngOnInit() {
    this.monthService.daysBlocks()
    console.log(this.monthService.month)
  }
}
