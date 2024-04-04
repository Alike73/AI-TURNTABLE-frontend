
import axios from 'axios';

const myURL = 'http://localhost:8000';


// GET:
const getMeAdmin = (setIsAdminPass) => {
    axios.get(`${myURL}/getMyAdminPass`)
    .then(({data}) => {// console.log(data)
        setIsAdminPass(data)
    })
};

export { getMeAdmin };