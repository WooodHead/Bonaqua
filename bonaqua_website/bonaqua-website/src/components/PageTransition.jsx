import React from 'react'

export default function PageTransition() {
    const container = $('.container');
const content = $('.content');
const h1 = $('.content h1');
const p = $('.content p');

var tl = new TimelineLite({ paused: !0 });

var splitHeader = new SplitText(h1,{type: 'chars'});
var headerChars = splitHeader.chars;

var splitP = new SplitText(p,{type: 'lines'});
var pLines = splitP.lines;

    
// t.staggerFromTo(i.lines, 0.5, { x: "-100%" }, { x: "0%", clearProps: "all" }, 0.04, 0.1),

tl
  .addLabel('targetPoint')
  .staggerFrom(headerChars, 0.4, {
    y: "-100%",
    opacity:0,
    ease:CustomEase.create("custom","M0,0,C0.396,0,0,1,1,1")
  }, 0.05, 'targetPoint')
  .staggerFrom(pLines, 0.6, {
    y: 15,
    opacity: 0,
    ease: CustomEase.create("custom","M0,0,C0.396,0,0,1,1,1"), delay: 0.2
  }, 0.1, 'targetPoint');



tl.play();


$('button').on('click', () => {
  tl.restart();
});



    return (
        <>
            {/* <div class="welcome">
                <p1 class="animation">
                    WELCOME
                </p1>
                <p2 class="animation1">
                    What are you here for?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p2>

            </div> */}


            <button>Appear</button>

            <section class="container">
                <div class="content">
                    <h1>This is a heading</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio reiciendis blanditiis enim animi! Reprehenderit debitis consequuntur a quia nobis quos omnis nisi vero, nostrum porro explicabo maxime, neque perferendis voluptates!</p>
                </div>
            </section>
        </>
    )
}
