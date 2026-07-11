import React,{useEffect, useState} from 'react';
import { tabContainerData } from '../assets/data';

const TabContent = ({activeTab}) => {


  return (
    <div  className='tabContent_container'>
        {
            tabContainerData.map((elem,index) =>(
                <div className={activeTab == index ? "tabContent_container_tabs active_tabContent_container" : "tabContent_container_tabs"} key={elem.id}>
                    <p>{elem.content}</p>
                </div>
            ))
        }
    </div>
  )
}

export default TabContent