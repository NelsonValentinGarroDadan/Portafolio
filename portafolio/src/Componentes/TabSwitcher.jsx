import { useEffect } from 'react';

const TabSwitcher = () => {
  useEffect(() => {
    let links = document.querySelectorAll('.link-nav');
    let zIndex = 2;
    let active = 'Presentacion';
    let valueTab, tabActive, activeOld , linkActive , linkActiveOld;

    const handleClick = (e) => {
      /*Estilo de los links */
      linkActiveOld = document.querySelector('.link-nav.active');
      linkActive = e.target;
      if (linkActiveOld) linkActiveOld.classList.remove('active');
      linkActive.classList.add('active');

      /*Estilo de los tabs */
      activeOld = document.querySelector('.tab.active');
      valueTab = e.target.dataset.tab;
    
      if (activeOld){ 
        activeOld.classList.remove('active')
        window.scrollTo(0, 0);
      };

      if (valueTab && valueTab !== active) {
        tabActive = document.getElementById(valueTab);
        zIndex++;
        tabActive.style.zIndex = zIndex;
        active = valueTab;

        tabActive.style.setProperty('--x', e.clientX + 'px');
        tabActive.style.setProperty('--y', e.clientY + 'px');
        tabActive.classList.add('active');
      }
    };

    links.forEach((a) => {
      a.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach((a) => {
        a.removeEventListener('click', handleClick);
      });
    };
  }, []); 

  return null; 
};

export default TabSwitcher;
