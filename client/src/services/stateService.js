import axios from "axios";

export default {
    getAllStates(){
        return axios.get('api/states').then( res => {
            return res.data
        })
    }
}