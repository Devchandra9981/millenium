import { DOCUMENT } from "@angular/common";
import { Component, Inject } from "@angular/core";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class AppLandingComponnent {
  isCollapsed = false;

  constructor(@Inject(DOCUMENT) private document: Document){

  }

  toggleClass(): void {
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);
    console.log(this.document.body.classList);
    this.document.body.classList.add('sidebar-overlay');
    console.log(this.document.body.classList);

  }

}
