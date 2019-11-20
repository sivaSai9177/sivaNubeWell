import { Component, OnInit, HostListener, Inject } from '@angular/core'; 
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {

   constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 1770) {
       let header = document.getElementById('network-header');
       let para = document.getElementById('network-para');
       header.classList.add('fade-up');
       para.classList.add('fade-up');
     }if(window.pageYOffset > 2200){
       var cards = document.querySelectorAll('section .card');
       cards.forEach(card=>{
         card.classList.add('fade-up');
       })
     }
  }
}
