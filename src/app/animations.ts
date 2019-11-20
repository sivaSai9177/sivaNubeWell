
import {trigger,transition,state,style,animate,query, stagger,  keyframes} from "@angular/animations";
import { stringify } from 'querystring';
;

export let fade = trigger("fade", [
         transition("* => *", [
           style({ transform: "translateY(120px)", opacity: 0 }),
           animate("0.8s cubic-bezier(.57,0,.29,1.04)",style({ transform: "translateY(0)", opacity: 1, offset: 0 })
           )
         ])
       ]); 
export let fadeLeft = trigger("fadeLeft", [
  transition("* => *", [
    style({ transform: "translateX(220px)", opacity: 0,}),animate("1s cubic-bezier(.57,0,.29,1.04)")
  ])
]); 
export let fadeUp = trigger("fadeUp", [
  transition("* => *", [
    style({ transform: "translateY(120px)", opacity: 0,}),animate("1s 0.2s cubic-bezier(.57,0,.29,1.04)")
  ])
]); 
export let fadeUpDelay = trigger("fadeUpDelay", [
  transition("* => *", [
    style({ transform: "translateY(120px)", opacity: 0,}),animate("1s 0.3s cubic-bezier(.57,0,.29,1.04)")
  ])
]); 
// export let fadeRight = trigger("fadeRight",[
//   transition("* => *", [
//     style({ transform: "translateX(-60px)", opacity: 0,}),animate("1s 1s cubic-bezier(0,0.1,0,1)",style({offset :0.3}))
//   ])
// ]); 

///// onScroll animation function
