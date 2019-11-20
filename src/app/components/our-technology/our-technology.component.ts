import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-our-technology',
  templateUrl: './our-technology.component.html',
  styleUrls: ['./our-technology.component.scss'],
})
export class OurTechnologyComponent implements OnInit {

    constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 635) {
       let header = document.getElementById('header');
       let para = document.getElementById('para');
       let btn = document.getElementById('btn');
       header.classList.add('fade-up');
       para.classList.add('fade-up');
       btn.classList.add('fade-up');
     }if(window.pageYOffset > 950){
       var techCards = document.querySelectorAll('.tech-cards');
       techCards.forEach(card=>{
         card.classList.add('fade-up');
       })
     }if(window.pageYOffset > 1300 ){
       var interfaceHeader = document.querySelector('.interface-header');
       var interfaceImg = document.querySelector('.interface img');
       interfaceImg.classList.add('fade-up');
       interfaceHeader.classList.add('fade-up');
     }
    //  } else {
    //   let element = document.getElementById('navbar');
    //     element.classList.remove('sticky'); 
    //  }
  }
  
}

