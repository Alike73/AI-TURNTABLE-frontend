
import axios from 'axios';

const myURL = 'http://localhost:8000';


// GET:
const getMeAdmin = (setAdminUtils) => {
    axios.get(`${myURL}/getMyAdminPass`)
    .then(({data}) => {console.log(data)
        setAdminUtils(data)
    })
};

export { getMeAdmin };