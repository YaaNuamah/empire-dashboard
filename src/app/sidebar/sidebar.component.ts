import { Component, OnInit } from '@angular/core';
import { Turntabl_Project } from '../endpoints';
import { EmpireService } from '../empire.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  listed_data: Turntabl_Project[] = [
  
  ];

  constructor(private appservice: EmpireService) { }
  ngOnInit() {
    this.appservice.getProjects().subscribe(response=>{
      this.listed_data = response
    })
  }

}
