
import axios from 'axios';

const myURL = 'https://ai-turntable-backend.onrender.com';

// ---> http://localhost:8000
// ---> https://ai-turntable-backend.onrender.com


// GET:
const getMeAdmin = (setAdminUtils) => {
    axios.get(`${myURL}/getMyAdminPass`)
    .then(({data}) => {console.log(data)
        setAdminUtils(data)
    })
};

export { getMeAdmin };