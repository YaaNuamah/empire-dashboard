import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {  Status } from "../endpoints";
import { EmpireService } from '../empire.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['../app.component.scss', './dashboard.component.scss'], 
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
    retrieved_data: Status[] = [
  
    ]; 

    constructor(private appservice: EmpireService) {
        ;
    }

    ngOnInit() {
        this.appservice.getStatus().subscribe(response=>{
          this.retrieved_data = response
          // console.log("Response oooooooo ",response);
          
        })
      }
    
    }
