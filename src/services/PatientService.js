import axios from "axios";

const PATIENT_BASE_REST_API_URL = 'http://localhost:8097/patient/'




class PatientService{
    getAllPatient(){

        return axios.get(PATIENT_BASE_REST_API_URL)

    }

    addPatient(patient){
        return axios.post(PATIENT_BASE_REST_API_URL, patient)

    }

    getPatientById(patientId){
        return axios.get(PATIENT_BASE_REST_API_URL + '/' + patientId);
    }

    updatePatient(patientId, patient){
        return axios.put(PATIENT_BASE_REST_API_URL + '/' + patientId, patient);
    }

    deletePatient(patientId){
        return axios.delete(PATIENT_BASE_REST_API_URL + '/' + patientId);
    }
}

export default new PatientService();