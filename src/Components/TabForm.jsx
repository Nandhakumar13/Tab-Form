import React,{useState} from 'react'
import TabHeader from './TabHeader'
import TabContent from './TabContent'

const TabForm = () => {
    const[currTab, setCurrTab] = useState(0);
    const currTabHandler = (tabValue)=>{
        setCurrTab(tabValue);
    }

    const btnHandler = (action)=>{
        if(action == 'prev'){
            setCurrTab(currTab - 1);
            return;
        }
        if(action == 'nxt' && currTab !== 2){
            setCurrTab(currTab + 1);
            return;
        }

        if(currTab == 2){
            alert("form submission");
        }
    }
  return (
    <>
        <div className="tab-container">
            <TabHeader currTabHandler={currTabHandler} currTab={currTab}></TabHeader>
            <TabContent activeTab={currTab}></TabContent>
        </div>
        <div className="btn-container">
                <button className='btn-elem' disabled={currTab == 0}  onClick={()=>btnHandler('prev')}>Previous</button>
                <button className='btn-elem' onClick={()=>btnHandler('nxt')}>{currTab == 2 ? 'Submit' : 'Next'}</button>
            </div>
    </>
  )
}

export default TabForm