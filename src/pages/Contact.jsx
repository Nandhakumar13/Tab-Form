import React from 'react'

const Contact = ({data}) => {
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
            <input type="text" name='email' className='formElem' value={data.email} onChange={(e) => handleValueChange(e)} />
            <label htmlFor="name" className='custLabel'>Email Id</label>
        </div>
        <div className="formGrp">
            <input type="text" name='mobileNumber' className='formElem' value={data.mobileNumber} onChange={(e) => handleValueChange(e)} />
            <label htmlFor="name" className='custLabel'>Mobile Number</label>
        </div>
        <div className="formGrp">
            <input type="text" name='address' className='formElem' value={data.address} onChange={(e) => handleValueChange(e)} />
            <label htmlFor="name" className='custLabel'>Address</label>
        </div>
    </div>
  )
}

export default Contact