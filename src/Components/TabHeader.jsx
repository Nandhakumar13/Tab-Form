import React,{useState} from 'react';
import {tabHeadData} from '../assets/data';

const TabHeader = ({currTabHandler,currTab}) => {
  return (
    <div className='tabHeader_container'>
        {
            tabHeadData.map((elem,index) => (
                <div className={currTab == index ? "tabHeader_tabs active_tabHeader_tabs" :"tabHeader_tabs"} key={elem.id} onClick={()=> currTabHandler(index)}>
                    {elem.title}
                </div>
            ))
        }
    </div>
  )
}

export default TabHeader