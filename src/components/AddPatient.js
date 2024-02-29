import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate , useParams } from 'react-router-dom'
import PatientService from '../services/PatientService'

const AddPatient = () => {

    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState()
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const navigate = useNavigate();

    const {pid} = useParams();



    const addOrUpdatePatient =(e) =>{

        e.preventDefault();

        const patient ={ name, gender, age, phone, address }

        if(pid){

            PatientService.updatePatient(pid, patient).then((response) => {

                navigate.push('/patient')

        }).catch(error =>{
            console.log(error);
        })

        }else{
            PatientService.addPatient(patient).then((response) =>{

                console.log(response.data)
        
                navigate.push('/patient')
                // history.push('/patient')
        
                }).catch(error =>{
                    console.log(error)
                })
        
            }

        }

        


    useEffect(() => {
        PatientService.getPatientById(pid).then((response) => {
            setName(response.data.name)
            setGender(response.data.gender);
            setAge(response.data.age);
            setPhone(response.data.phone);
            setAddress(response.data.address);
        }).catch(error =>{
            console.log(error)
        })
    }, [])

    const title = () => {
        if(pid){
            return <h2 className = "text-center">Update Patient</h2>
        }else{
            return <h2 className = "text-center"> Add Patient</h2>
        }
    }

    return (
        <div>
            <br/>
            <br/>
            <div className="container">
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>

                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label class="form-label">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Name"
                                        name="name"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}>
                                    </input>

                                </div>
                                <div className="form-group mb-2">
                                    <label class="form-label">Gender</label>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label className="form-check-label" for="inlineRadio1">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label className="form-check-label" for="inlineRadio2">Female</label>
                                    </div>

                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Age</label>
                                    <input
                                        type="text"
                                        placeholder="Enter age"
                                        name="age"
                                        className="form-control"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}>
                                    </input>

                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Phone</label>
                                    <input
                                        type="text"
                                        placeholder="Enter phone no"
                                        name="phone"
                                        className="form-control"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}>
                                    </input>

                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Address</label>
                                    <input
                                        type="text"
                                        placeholder="Enter address"
                                        name="address"
                                        className="form-control"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}>
                                    </input>

                                </div>

                                <button className="btn btn-success" onClick={(e) => addOrUpdatePatient(e)}>submit</button>
                                <Link to="/patient" className="btn btn-danger"> Cancel</Link>


                            </form>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default AddPatient