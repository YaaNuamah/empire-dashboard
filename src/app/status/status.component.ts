import { Component, OnInit } from '@angular/core';
import { EmpireService } from '../empire.service';
import { Status } from '../endpoints';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  retrieved_data: Status[] = [
  
]; 

  constructor(private appservice: EmpireService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.appservice.getStatus().subscribe(response=>{
      this.retrieved_data = response
      // console.log("Response oooooooo ",response);
      
    })
  }

}
