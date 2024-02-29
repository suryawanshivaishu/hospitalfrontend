import React, { useState , useEffect} from 'react';
import PatientService from '../services/PatientService';
import { Link } from 'react-router-dom';


const ListPatient = () => {

    const[ patient , setPatient] = useState([])

    useEffect(() => {

        
        getAllPatient();
            
     
    }, [])

    const getAllPatient=() => {

        PatientService.getAllPatient().then((response)=>{
            setPatient(response.data)
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })

    }


    const deletePatient =(patientId) =>{
        //console.log(patientId);
        PatientService.deletePatient(patientId).then((response) =>{

            getAllPatient();

        }).catch(error =>{
           console.log(error); 
        })
    }
    
      return (
    <div className="container">


        <h2 className="text-center">List patient</h2>
        <Link to="/add-patient" className='btn btn-primary mb-2' >Add Patient</Link>
        <table className="table table-bordered table-striped">
            <thead>
                <th> Patient Id</th>
                <th> Patient name</th>
                <th> Gender</th>
                <th> Age</th>
                <th> Phone No. </th>
                <th> Address</th>
                <th>Actions</th> 
            </thead>
            <tbody>
                {
                    patient.map(
                        patient =>
                        <tr key = {patient.pid}>
                            <td>{patient.pid}</td>
                            <td>{patient.name}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.age}</td>
                            <td>{patient.phone}</td>
                            <td>{patient.address}</td>
                            <td>
                                <Link className="btn btn-info" to ={`/edit-patient/${patient.pid}`}>Update</Link>
                                <button className="btn btn-danger" onClick = {() => deletePatient(patient.pid)} style={{marginLeft:"10px"}}>Delete</button>
                            </td>

                        </tr>
                    )
                }
            </tbody>

        </table>
    </div>
  )
}

export default ListPatient