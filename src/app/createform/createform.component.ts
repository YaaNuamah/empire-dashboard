import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.scss']
})
export class CreateformComponent implements OnInit {

  public projects: any[] = [{ project: '' }];

  public endpoints: any[] = [{ endpoints: '' }];

  constructor() { }

  ngOnInit() {}

  addProject() {
    this.projects.push({project: ''});
}
addEndpoint() {
    this.endpoints.push({endpoint: ''});
}
removeEndpoint(i : number) {
    this.endpoints.splice(i, 1);
}

logValue(form : NgForm) {

    console.log(form);
    console.log(form.value);
    form.reset();
    // console.log(value.projectName)


    // console.log(this.projects);
    // console.log(this.endpoints);
}

}


