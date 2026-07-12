import React,{useState} from 'react';
import { tabContainerData } from '../assets/data';


const TabContent = ({activeTab}) => {

    const [formData, setFormData] = useState({
        username:"",
        dateOfBirth:"",
        rollNo:"",
        gender:"",
        email:"",
        mobileNumber:"",
        address:"",
        language:[],
        locationPreference:[]
    })

    const ActiveComponent = tabContainerData[activeTab].content;
  return (
    <div  className='tabContent_container'>
        {/* {
            tabContainerData.map((elem,index) =>(
                <div className={activeTab == index ? "tabContent_container_tabs active_tabContent_container" : "tabContent_container_tabs"} key={elem.id}>
                    <p>{elem.content}</p>
                </div>
            ))
        } */}
        <ActiveComponent data={formData} setFormData={setFormData}/>
    </div>
  )
}

export default TabContent