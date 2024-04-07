import { useDispatch, useSelector } from 'react-redux';
import turntableArm from '../../assets/images/turntableArm2.png';
import { getActiveArm, getResetAnimation, setResetAnimation } from '../../redux/AudioSlice';
import { useEffect } from 'react';

const TurntableArm = () => {

    const activeArm = useSelector(getActiveArm);
    const resetAnimation = useSelector(getResetAnimation);
    const dispatch = useDispatch();

    useEffect(() => {
        const resetAnimationTimeout = setTimeout(() => {
            dispatch(setResetAnimation(false));
        }, 500);

        return () => {
            clearTimeout(resetAnimationTimeout);
        };
    }, [resetAnimation, dispatch]);

    return (
        <img 
            className={ `turntable_arm ${ activeArm ? "active" : "" }` } 
            src={ turntableArm } 
            alt="turntable arm" 
        />
    )
};

export default TurntableArm;