import { Component, OnInit,HostListener, Inject} from '@angular/core';
import { fade, fadeLeft,fadeUp,fadeUpDelay} from 'src/app/animations';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: "app-jumbotron",
  templateUrl: "./jumbotron.component.html",
  styleUrls: ["./jumbotron.component.scss"],
  animations: [
    fade,
    fadeLeft,
    fadeUp,
    fadeUpDelay,
    // fadeUpDelay1
  ]
})
export class JumbotronComponent implements OnInit {
  constructor( @Inject(DOCUMENT) document ) { }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    var cardArray = document.querySelectorAll('.float-card');
     if (window.pageYOffset > 100) {
       let element = document.getElementById('float-header');
       let para = document.getElementById('float-para');
       cardArray.forEach(card=>{
         card.classList.add('fade-up');
       })
       element.classList.add('fade-up');
       para.classList.add('fade-up');

     }
    //  } else {
    //   let element = document.getElementById('float-header');
    //     element.classList.remove('fade-up'); 
    //  }
  }
}
