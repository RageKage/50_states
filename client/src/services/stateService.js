import axios from "axios";

export default {
    getAllStates(){
        return axios.get('api/states').then( res => {
            return res.data
        })
    },
    setVisited(stateName, visited) {
        return axios.patch('/api/states/' + stateName, {visited: visited}).then( res => {
            return res.data
        })
    }
    
}
