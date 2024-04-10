import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addSound, editSound, getSounds } from '../api/FetchRecords';
import { getMeAdmin } from '../api/FetchAdminPass';
import { setAdminFullName, setAdminPass } from '../redux/AdminSecureSlice';
import { setVinylCover, setVinylRecordLink, setVinylTitle } from '../redux/VinylRecordSlice';
import { getIsPlayingAudio, setActiveArm, setCurrentTime, setIsPlaying, setPlayEqualizer, setResetAnimation, setShowHeroPlayer } from '../redux/AudioSlice';
import Swal from 'sweetalert2';
import Turntable from '../components/turntable/Turntable';
import Hero from '../components/hero/Hero';
import VinylLibrary from '../components/vinyl-library/VinylLibrary';
import ScrollSet from '../components/ScrollSet/ScrollSet';
import Editor from '../components/editor/Editor';
import OpenFAQsBtn from '../components/faqs/OpenFAQsBtn';
import ModalFAQs from '../components/faqs/ModalFAQs';
import { getMusicCategories } from '../api/FetchMusicCategory';

const Main = () => {

    const [sounds, setSounds] = useState([]);
    const [listOfCategories, setListOfCategories] = useState([]);
    // --------------------------------------------------------
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [soundLink, setSoundLink] = useState('');
    const [recordId, setRecordId] = useState('');
    const [editing, setEditing] = useState(false);
    // --------------------------------------------------------
    const [adminUtils, setAdminUtils] = useState([]);
    const misterZ = adminUtils.map((item) => (item.adminFullName))
    const misterY = adminUtils.map((item) => (item.password))
    const misterX = misterY[0];
    const misterXZ = misterZ[0];
    // ------------------------------------------------
    const isPlaying = useSelector(getIsPlayingAudio);
    const audioRef = useRef(null);
    // ------------------------------------------------
    const dispatch = useDispatch();

    const demoCoverImg = sounds.map((item) => (item.image));
    const defaultCoverImg = demoCoverImg[0]
    const demoRecordTitle = sounds.map((item) => (item.title));
    const defaultRecordTitle = demoRecordTitle[0]
    const demoRecord = sounds.map((item) => (item.soundLink));
    const defaultRecordSound = demoRecord[0]

    useEffect(() => {
        getMeAdmin(setAdminUtils)
        dispatch(setAdminPass(misterX))
        dispatch(setAdminFullName(misterXZ))
        getSounds(setSounds)
        getMusicCategories(setListOfCategories)
        dispatch(setVinylCover(defaultCoverImg))
        dispatch(setVinylTitle(defaultRecordTitle))
        dispatch(setVinylRecordLink(defaultRecordSound))
    }, [dispatch, misterX, misterXZ, defaultCoverImg, defaultRecordTitle, defaultRecordSound]);

    // -----------------------------------------------------
    const updatingInInput = (_id, image, title, category, soundLink) => {
        setRecordId(_id)
        setImage(image)
        setTitle(title)
        setCategory(category)
        setSoundLink(soundLink)
        setEditing(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                if(editing) {
                    editSound(recordId, image, setImage, title, setTitle, category, setCategory, soundLink, setSoundLink, setEditing, setSounds)
                }
                else {
                    addSound(image, setImage, title, setTitle, category, setCategory, soundLink, setSoundLink, setSounds)
                }
                Swal.fire({
                    icon: "success",
                    title: "Saved!",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    };
    // -----------------------------------------------------

    // ----------Play,Pause,Stop-Audio---------------------
    const handlePlayPause = () => {
        const audio = audioRef.current;
        const audios = document.getElementsByTagName('audio');

        if (isPlaying) {
            audio.pause();
            dispatch(setIsPlaying(false));
        
            let hasPlayingAudio = false;
            for (let i = 0; i < audios.length; i++) {
            if (!audios[i].paused) {
                hasPlayingAudio = true;
                break;
            }
            }
            dispatch(setPlayEqualizer(hasPlayingAudio));
        } else {
            setTimeout(() => {
                audio.play();
                dispatch(setIsPlaying(true));
                dispatch(setPlayEqualizer(true));
            }, 300); // Delay of 0.3 seconds before playing the audio
        }
        dispatch(setActiveArm(true));

        audioRef.current.ontimeupdate = () => {
            // Dispatch the setCurrentTime action with the current audio time
            dispatch(setCurrentTime(audioRef.current.currentTime));
        };
        dispatch(setShowHeroPlayer(true));
    };

    const handleStop = () => {
        const audio = audioRef.current;
        audio.pause();
        audio.currentTime = 0;
        dispatch(setIsPlaying(false));
        dispatch(setResetAnimation(true));
        dispatch(setActiveArm(false));
        const audios = document.getElementsByTagName('audio');
        let hasPlayingAudio = false;
        for (let i = 0; i < audios.length; i++) {
            if (!audios[i].paused) {
            hasPlayingAudio = true;
            break;
            }
        }
        dispatch(setPlayEqualizer(hasPlayingAudio));
    };

//   -----------------------------------------------------------------------------------
    

    return (
        <div className='main'>
            <Editor 
                handleSubmit = { handleSubmit } 
                image = { image }
                setImage = { setImage }
                title = { title }
                setTitle = { setTitle }
                category =  { category }
                setCategory = { setCategory }
                soundLink = { soundLink }
                setSoundLink= { setSoundLink }
                editing = { editing }
                listOfCategories = { listOfCategories }
            />
            <ModalFAQs />
            <ScrollSet />
            <OpenFAQsBtn />
            <Hero 
                audioRef = { audioRef } 
                handlePlayPause = { handlePlayPause } 
                handleStop = { handleStop }
            />
            <VinylLibrary 
                audioRef = { audioRef } 
                sounds = { sounds }
                setSounds = { setSounds }
                updatingInInput = { updatingInInput}
                setImage = { setImage }
                setTitle = { setTitle }
                setCategory = { setCategory }
                setSoundLink= { setSoundLink }
                setEditing = { setEditing }
                listOfCategories = { listOfCategories }
                setListOfCategories = { setListOfCategories }
            />
            <Turntable
                handlePlayPause = { handlePlayPause } 
                handleStop = { handleStop } 
                audioRef = { audioRef }
            />
        </div>
    )
};

export default Main;