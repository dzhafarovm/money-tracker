//import React, { useState, useEffect } from 'react';
//import { useState } from 'react';
import style from './AnimatedKapusta.module.css';
// import sprite from 'components/images/sprite.svg';
import group from 'components/images/group.svg';
import ReactVivus from 'react-vivus';
import kapusta from 'components/images/kapusta.svg';
const AnimatedKapusta = () => {
  return (
    <div className={style.animationBlock}>
      <div className={style.kapustaBody}>
        <svg width="183" height="142">
          <use href={`${kapusta}#id`}></use>
        </svg>
      </div>
      <ReactVivus
        className={style.kapustaVivus}
        id="gr"
        option={{
          duration: 400,
          file: group,
          animTimingFunction: 'EASE',
          type: 'sync',
          onReady: console.log,
        }}
        style={{ height: '142px', width: '183px' }}
      />
    </div>
  );
};

// const AnimatedKapusta = () => {
//   return (
//     <div className={style.animationBlock}>
//       <div>
//         {' '}
//         <svg className={style.kapustaBody} width="83" height="89">
//           <use href={`${sprite}#capusta-left`}></use>
//         </svg>
//       </div>

//       <ReactVivus
//         className={style.kapustaVivus}
//         id="left"
//         option={{
//           duration: 400,
//           file: anim,
//           animTimingFunction: 'EASE',
//           type: 'oneByOne',
//           onReady: console.log,
//         }}
//         style={{ height: '89px', width: '83px' }}
//       />

//       <div>
//         <svg className={style.leftEllips} width="67" height="14">
//           <use href={`${sprite}#ellipse`}></use>
//         </svg>
//       </div>

//       <div>
//         <svg className={style.kapustaBody} width="83" height="89">
//           <use href={`${sprite}#capusta-right`}></use>
//         </svg>
//       </div>

//       <ReactVivus
//         className={style.kapustaVivus}
//         id="right"
//         option={{
//           duration: 400,
//           file: anim,
//           animTimingFunction: 'EASE',
//           type: 'oneByOne',
//           onReady: console.log,
//         }}
//         style={{ height: '89px', width: '83px' }}
//       />
//       <div>
//         <svg className={style.rightEllips} width="67" height="14">
//           <use href={`${sprite}#ellipse`}></use>
//         </svg>
//       </div>
//     </div>
//   );
// };

// const AnimatedKapusta = () => {
//   if () {
//     return (
//       <div className={style.kapustaContainer}>
//         <svg width="83" height="89">
//           <use href={'${anim}#anim'}></use>
//         </svg>
//       </div>
//     );
//   } else {
//     return (
//       <ReactVivus
//         className={style.kapustaVivus}
//         id="anim"
//         option={{
//           duration: 400,
//           file: anim,
//           animTimingFunction: 'EASE',
//           type: 'oneByOne',
//           onReady: console.log,
//         }}
//         style={{ height: '89px', width: '83px' }}
//       />
//     );
//   }
// };

// const AnimatedKapusta = () => {
//   return (
//     <ReactVivus
//       id="capusta-left"
//       option={{
//         duration: 400,
//         file: sprite,
//         animTimingFunction: 'EASE',
//         type: 'oneByOne',
//         onReady: console.log,
//       }}
//       style={{ height: '89px', width: '83px', fill: '#dfe2eb' }}
//       callback={console.log}
//     />
//   );
// };

// const AnimatedKapusta = () => {
//   return (
//     <div className={style.kapustaContainer}>
//       <svg id="my-svg" width="83" height="89">
//         <use href={'${kapusta}#kapusta'}></use>
//       </svg>
//     </div>
//   );
// };

export default AnimatedKapusta;
