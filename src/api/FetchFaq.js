import axios from 'axios';

const myURL = 'https://alike73.github.io/src/ai-turntable-faq-data/data.json';


// GET:
const getFAQs = (setFaqs) => {
    axios.get(`${myURL}`)
    .then(({data}) => {console.log(data)
        setFaqs(data)
    })
};

export { getFAQs };