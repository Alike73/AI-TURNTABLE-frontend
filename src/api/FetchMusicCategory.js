import axios from 'axios';

const myURL = 'http://localhost:8000';

const getMusicCategories = (setListOfCategories) => {
    axios.get(`${myURL}/getMusicCategories`)
    .then(({data}) => {console.log(data)
        setListOfCategories(data)
    })
}

const addMusicCategory = (musicCategory, setMusicCategory, setListOfCategories) => {
    axios.post(`${myURL}/saveMusicCategory`, { musicCategory })
    .then((data) => {
        console.log(data)
        setMusicCategory('')
        getMusicCategories(setListOfCategories)
    })
}

const editMusicCategory = (musicCategoryId, musicCategory, setMusicCategory, setEditingMusicCategory, setListOfCategories) => {
    axios.put(`${myURL}/editMusicCategory`, { _id: musicCategoryId, musicCategory })
    .then((data) => {
        console.log(data)
        setMusicCategory('')
        setEditingMusicCategory(false)
        getMusicCategories(setListOfCategories)
    })
}

const deleteMusicCategory= (_id, setListOfCategories) => {
    axios.delete(`${myURL}/deleteMusicCategory/${_id}`) // Pass _id in the URL
    .then((data) => {
        console.log(data);
        getMusicCategories(setListOfCategories)
    })
};

export { getMusicCategories, addMusicCategory, editMusicCategory, deleteMusicCategory };


