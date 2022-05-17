import React from 'react';
import bona from '../images/bona0.5.png'
import svg from '../images/svg/flower.svg'

export default function Mouse() {
//     const root = document.querySelector(":root");
// const customPointer = document.querySelector(".custom-pointer");
// const button = document.querySelector(".button");

// let [
//   pointerX,
//   pointerY,
//   previousPointerX,
//   previousPointerY,
//   angle,
//   previousAngle,
//   angleDisplace
// ] = Array(7).fill(0);
// const degrees = 57.296;

// // button.addEventListener("mouseover", () => {
// //   customPointer.style.filter = "blur(3px)";
// //   root.style.setProperty("--cursor-size", "28px");
// // });

// // button.addEventListener("mouseout", () => {
// //   customPointer.style.filter = "blur(0px)";
// //   root.style.setProperty("--cursor-size", "20px");
// // });

// document.onmousemove = function (event) {
//   let distanceX, distanceY;
//   previousPointerX = pointerX;
//   previousPointerY = pointerY;
//   pointerX = event.pageX;
//   pointerY = event.pageY;

//   distanceX = previousPointerX - pointerX;
//   distanceY = previousPointerY - pointerY;

//   if (distanceX <= 0 && distanceY >= 0) {
//     setDisplacement(distanceX, distanceY, pointerX, pointerY, true, 0);
//   } else if (distanceX < 0 && distanceY < 0) {
//     setDisplacement(distanceX, distanceY, pointerX, pointerY, false, 90);
//   } else if (distanceX >= 0 && distanceY <= 0) {
//     setDisplacement(distanceX, distanceY, pointerX, pointerY, true, 180);
//   } else if (distanceX > 0 && distanceY > 0) {
//     setDisplacement(distanceX, distanceY, pointerX, pointerY, false, 270);
//   }
// };

// function setDisplacement(dx, dy, px, py, flip = false, dir = 0) {
//   previousAngle = angle;

//   if (flip) {
//     angle = 90 - Math.atan(Math.abs(dy) / Math.abs(dx)) * degrees + dir;
//   } else {
//     angle = Math.atan(Math.abs(dy) / Math.abs(dx)) * degrees + dir;
//   }

//   if (isNaN(angle)) {
//     angle = previousAngle;
//   } else {
//     if (angle - previousAngle <= -270) {
//       angleDisplace += 360 + angle - previousAngle;
//     } else if (angle - previousAngle >= 270) {
//       angleDisplace += angle - previousAngle - 360;
//     } else {
//       angleDisplace += angle - previousAngle;
//     }
//   }
//   customPointer.style.transform = `translate3d(${px}px, ${py}px, 0) rotate(${angleDisplace}deg)`;
// }

  return (
      <>
    {/* <section className="text-section">
    <p>Move the cursor around</p>
    <div className="button">Trigger me</div>
  </section> */}
  <div className="custom-pointer">
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path class="inner" d="M25,30a5.82,5.82,0,0,1-1.09-.17l-.2-.07-7.36-3.48a.72.72,0,0,0-.35-.08.78.78,0,0,0-.33.07L8.24,29.54a.66.66,0,0,1-.2.06,5.17,5.17,0,0,1-1,.15,3.6,3.6,0,0,1-3.29-5L12.68,4.2a3.59,3.59,0,0,1,6.58,0l9,20.74A3.6,3.6,0,0,1,25,30Z" />
      <path class="outer" d="M16,3A2.59,2.59,0,0,1,18.34,4.6l9,20.74A2.59,2.59,0,0,1,25,29a5.42,5.42,0,0,1-.86-.15l-7.37-3.48a1.84,1.84,0,0,0-.77-.17,1.69,1.69,0,0,0-.73.16l-7.4,3.31a5.89,5.89,0,0,1-.79.12,2.59,2.59,0,0,1-2.37-3.62L13.6,4.6A2.58,2.58,0,0,1,16,3m0-2h0A4.58,4.58,0,0,0,11.76,3.8L2.84,24.33A4.58,4.58,0,0,0,7,30.75a6.08,6.08,0,0,0,1.21-.17,1.87,1.87,0,0,0,.4-.13L16,27.18l7.29,3.44a1.64,1.64,0,0,0,.39.14A6.37,6.37,0,0,0,25,31a4.59,4.59,0,0,0,4.21-6.41l-9-20.75A4.62,4.62,0,0,0,16,1Z" />
    </svg> */}
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246.709 246.709">
        <path d="m193.301,63.928c0-12.068-8.765-24.284-25.517-24.284-0.826,0-1.663,0.03-2.51,0.09 6.382-9.467 5.535-17.687 4.435-21.793-2.785-10.396-12.76-17.941-23.718-17.941-8.159,0-17.194,4.45-22.645,15.684-5.449-11.234-14.484-15.684-22.644-15.684-10.956,0-20.929,7.545-23.715,17.94-1.101,4.106-1.947,12.326 4.434,21.793-10.872-0.767-20.014,3.618-24.764,11.846-4.333,7.506-4.332,17.205 0.002,24.709 4.378,7.58 12.485,11.927 22.244,11.927 0.003,0 0.006,0 0.008,0 0.826,0 1.662-0.03 2.509-0.09-6.384,9.469-5.535,17.69-4.434,21.797 2.786,10.395 12.757,17.937 23.711,17.936 0.002,0 0.005,0 0.006,0 3.337-0.001 6.818-0.762 10.144-2.411v33.946h-42.534v28.634h7.884l9.033,38.726h-16.917v19.957h110.068v-19.957h-16.917l9.033-38.726h7.884v-28.634h-42.534v-33.878c3.132,1.533 6.555,2.344 10.146,2.343 10.956,0 20.93-7.546 23.715-17.941 1.1-4.105 1.947-12.324-4.434-21.791 0.848,0.06 1.685,0.09 2.511,0.09 16.751-0.002 25.516-12.22 25.516-24.288zm-69.954,20.033c-11.063,0-20.032-8.969-20.032-20.032s8.969-20.032 20.032-20.032 20.032,8.969 20.032,20.032-8.969,20.032-20.032,20.032z" />
    </svg> */}
    <img src={bona} alt="" width={30}/>
  </div>
  </>
  )
}
