import ReactVivus from 'react-vivus';

import group from 'components/images/group.svg';
import kapusta from 'components/images/kapusta.svg';

import style from './AnimatedKapusta.module.css';

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

export default AnimatedKapusta;
