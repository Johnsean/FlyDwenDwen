const string = `
/* 让我们开始画冰墩墩吧！*/
* {
  margin: 0;
  padding: 0;
}
body {
  font: 15px "Microsoft YaHei", Arial, Helvetica, sans-serif;
  color: #000;
  background: #d4ebf1;
}

/* 首先画身体 */
.m_body {
  position: absolute;
  left: 109px;
  top: -30px;
  margin: 50px auto;
  width: 362px;
  height: 410px;
  border: #393939 8px solid;
  border-radius: 88% 88% 62% 68% / 82% 82% 95% 84%;
  background: #fff;
}

/* 然后准备耳朵~ */
.ear1,
.ear2 {
  position: absolute;
  width: 81px;
  height: 115px;
  border-radius: 50%;
  z-index: -1;
  background: #393939;
}
.ear1 {
  top: 26px;
  left: 150px;
  transform: rotate(-10deg);
}
.ear2 {
  top: 28px;
  left: 362px;
  transform: rotate(10deg);
}

/* 现在准备眼眶 */
.eye1,
.eye2 {
  position: absolute;
  background: #393939;
  width: 83px;
  height: 115px;
  border-radius: 50%;
}
.eye1 {
  top: 122px;
  left: 185px;
  transform: rotate(45deg);
}
.eye2 {
  top: 122px;
  left: 329px;
  transform: rotate(-45deg);
}

/* 以及眼睛 */
.eye1:before,
.eye2:before {
  position: absolute;
  content: "";
  width: 40px;
  height: 40px;
  border: #fff 5px solid;
  border-radius: 100%;
}
.eye1:before {
  top: 22px;
  right: 10px;
}
.eye2:before {
  top: 22px;
  left: 10px;
}
.eye1:after,
.eye2:after {
  position: absolute;
  content: "";
  width: 10px;
  height: 10px;
  background: #9b9b9b;
  border-radius: 100%;
}
.eye1:after {
  top: 31px;
  right: 27px;

}
.eye2:after {
  top: 44px;
  left: 41px;
}

/* 现在开始画脸 */
.face {
  position: absolute;
  border-radius: 48% 48% 44% 49%/ 53% 54% 45% 47%;
}
.c_blue {
  top: 78px;
  left: 150px;
  width: 280px;
  height: 224px;
  border: #6bcdf3 5px solid;
}
.c_red {
  top: 73px;
  left: 146px;
  width: 287px;
  height: 233px;
  border: #af2350 5px solid;
}
.c_purple {
  top: 70px;
  left: 142px;
  width: 295px;
  height: 240px;
  border: #5d75b3 5px solid;
}
.c_yellow {
  top: 65px;
  left: 137px;
  width: 305px;
  height: 248px;
  border: #ffc346 5px solid;
}
.c_green {
  top: 61px; 
  left: 133px; 
  width: 313px;
  height: 256px;
  border: #7fcb58 5px solid;
}

/* 然后是手 */
.arm1,
.arm2 {
  position: absolute;
  background: #333;
  z-index: -1;
}
.arm1 {
  top: 244px;
  left: 64px;
  width: 75px;
  height: 118px;
  transform: rotate(45deg);
  border-radius: 24% 69% 68% 76%/ 53% 95% 40% 52%;
}
.arm2 {  
  top: 162px;  
  left: 463px;
  width: 75px;
  height: 148px;
  transform: rotate(37deg);
  border-radius: 56% 62% 98% 6%/ 40% 46% 80% 58%;
}

/* 看它的爱心~ */
.arm2:before {
  position: absolute; 
  top: 20px;
  left: 32px;
  content: "";
  width: 16px;
  height: 24px;
  transform: rotate(45deg);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  background: #bc242c;
}
.arm2:after {
  position: absolute;
  top: 20px;
  left: 26px;
  content: "";
  width: 16px;
  height: 24px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  transform: rotate(-45deg);
  background: #bc242c;
}
.arm_c {
  position: absolute;
  top: 20px;
  left: 426px;
  content: "";
  width: 16px;
  height: 24px;
}

/* 开始画鼻子 */
.nose {
  background-color: #333333;
}
.nose:before,
.nose:after {
  position: absolute;
  content: "";
  background-color: inherit;
}
.nose,
.nose:before,
.nose:after {
  width: 28px;
  height: 18px;
  border-radius: 42px 42px 60px 61px/ 30px 30px 50px 46px;
}
.nose {
  position: absolute;
  top: 187px;
  left: 284px;
}

/* 以及会心一笑 */
.mouse {
  position: absolute;
  top: 205px;
  left: 265px;
  width: 68px;
  height: 25px;
  border: #393939 7px solid;
  border-top: none;
  border-left: 0;
  border-right: 0;
  border-radius: 48%;
}

/* 然后是它的脚 */
.leg1,
.leg2 {
  position: absolute;
  width: 83px;
  height: 80px;
  background: #333;
  border-radius: 0 0 30px 30px;
  z-index: -1;
}
.leg1 {
  top: 423px;
  left: 187px;
}
.leg2 {
  top: 423px;
  left: 328px;
}
.leg1:after,
.leg2:after {
  position: absolute;
  content: "";
  width: 43px;
  height: 30px;
  border-radius: 30px;
  background: #363636;
}
.leg1:after {
  right: -3px;
  bottom: 0;
}
.leg2:after {
  left: -3px;
  bottom: 0;
}

/* 现在大功告成了！ */
`
export  default  string