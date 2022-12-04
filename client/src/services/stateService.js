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
    },
    // this return info about just one state example http://localhost:3000/api/state/Arizona 
    getOneState(stateName) {
        return axios.get('/api/state/' + stateName).then( res => {
            return res.data
        })
    }
    
}
