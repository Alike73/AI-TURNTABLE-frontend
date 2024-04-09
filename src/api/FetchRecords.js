import axios from 'axios';

const myURL = 'http://localhost:8000';

const getSounds = (setSounds) => {
    axios.get(`${myURL}`)
    .then(({data}) => {console.log(data)
        setSounds(data)
    })
}

const addSound = (image, setImage, title, setTitle, category, setCategory, soundLink, setSoundLink, setSounds) => {
    axios.post(`${myURL}/saveSound`, { image, title, category, soundLink })
    .then((data) => {
        console.log(data)
        setImage('')
        setTitle('')
        setCategory('')
        setSoundLink('')
        getSounds(setSounds)
    })
}

const editSound = (recordId, image, setImage, title, setTitle, category, setCategory, soundLink, setSoundLink, setEditing, setSounds) => {
    axios.put(`${myURL}/editSound`, { _id: recordId, image, title, category, soundLink })
    .then((data) => {
        console.log(data)
        setImage('')
        setTitle('')
        setCategory('')
        setSoundLink('')
        setEditing(false)
        getSounds(setSounds)
    })
}

const deleteSound= (_id, setSounds) => {
    axios.delete(`${myURL}/deleteSound`, { _id })
    .then((data) => {
    console.log(data);
    getSounds(setSounds);
    })
    .catch((error) => {
    console.log(error);
    });
};

export { getSounds, addSound, editSound, deleteSound };
