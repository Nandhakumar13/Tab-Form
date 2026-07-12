import React from 'react'

const Profile = ({data,setFormData}) => {
    const handleValueChange = (e) => {
        const{name,value} = e.target;
        console.log(e.target);
        setFormData((prev) => ({
            ...prev,
            [name]:value
        }))
        
    }
    
  return (
    <div className='formContainer'>
        <div className="formGrp">
            <input type="text" name='username' className='formElem' value={data.username} onChange={(e) => handleValueChange(e)} />
            <label htmlFor="name" className='custLabel'>Name</label>
        </div>
        <div className="formGrp">
            <input type="text" name='rollNo' className='formElem' value={data.rollNo} onChange={(e) => handleValueChange(e)} />
            <label htmlFor="name" className='custLabel'>Roll Number</label>
        </div>
        <div className="formGrp">
            <input type="date" name='dateOfBirth' className='formElem' value={data.dateOfBirth} onChange={(e) => handleValueChange(e)} />
            <label htmlFor="name" className='custLabel'>Date of Birth</label>
        </div>
        <div className="formGrp formGrp-radio">
            <input type="radio" id='male' name='gender'  value="male" onChange={(e) => handleValueChange(e)} />
            <label htmlFor="male">Male</label>
            <input type="radio" id='female' name='gender'  value="female" onChange={(e) => handleValueChange(e)} />
            <label htmlFor="female">Female</label>
        </div>
        {JSON.stringify(data)}

    </div>
  )
}

export default Profile;