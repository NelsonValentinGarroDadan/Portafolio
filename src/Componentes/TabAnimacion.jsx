import { useEffect } from 'react';

const TabSwitcher = () => {
  useEffect(() => {
    const linksHeader = document.querySelectorAll('.link');
    let linksNav = document.querySelectorAll('.link-nav');
    let zIndex = 2;
    let active = 'Presentacion';
    let valueTab, tabActive, activeOld , linkActive , linkActiveOld;

    const handleClick = (e) => {
      e.preventDefault();
      valueTab = e.target.parentElement.parentElement.dataset.tab? e.target.parentElement.parentElement.dataset.tab : e.target.dataset.tab;
      /*Estilo de los links */
      linkActiveOld = document.querySelector('.link.active');
      let target = e.target.parentElement.parentElement ? e.target.parentElement.parentElement : e.target;
      if(target.innerHTML === 'Ve mis habilidades'){
        linkActive = linksHeader[2];
      }else if(e.target.innerHTML === 'Ve mi presentacion'){
        linkActive = linksHeader[0];
      }else{
        linkActive = target;
      }
      
      if (linkActiveOld) linkActiveOld.classList.remove('active');
      linkActive.classList.add('active');

      /*Estilo de los tabs */
      activeOld = document.querySelector('.tab.active');
      
      
      if (valueTab && valueTab !== active) {
        if (activeOld) activeOld.classList.remove('active');
        tabActive = document.getElementById(valueTab);
        zIndex++;
        tabActive.style.zIndex = zIndex;
        active = valueTab;

        tabActive.style.setProperty('--x', e.clientX + 'px');
        tabActive.style.setProperty('--y', e.clientY + 'px');
        tabActive.classList.add('active');
      }
    };
    linksNav.forEach((a) => {
      a.addEventListener('click', handleClick);
    });
    document.addEventListener('DOMContentLoaded', function() {
      const tabElement = document.querySelectorAll('.tab');
      tabElement.forEach((e)=>{
          e.classList.add('initialized');
      });
      
  });
    return () => {
      linksNav.forEach((a) => {
        a.removeEventListener('click', handleClick);
      });
    };
  }, []); 
//Animacion carga de pagina
  useEffect(() => {
    const initializeTabs = () => {
      const tabElements = document.querySelectorAll('.tab');
      tabElements.forEach((tabElement) => {
        tabElement.classList.add('initialized');
      });
    };
    initializeTabs();
    return () => {
    };
  }, []); 


  return null; 
};

export default TabSwitcher;
