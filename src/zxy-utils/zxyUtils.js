import Swal from 'sweetalert2';
import { setIsAdmin } from '../redux/AdminSecureSlice';

const handlePassword = async (adminFullName, adminPass, dispatch) => {
    const { value: adminName } = await Swal.fire({
        title: "Enter your admin name",
        input: "text",
        inputLabel: "AdminName",
        inputPlaceholder: "Enter your admin name",
        inputAttributes: {
        maxlength: "35",
        autocapitalize: "off",
        autocorrect: "off"
        }
    });

    const { value: password } = await Swal.fire({
        title: "Enter your admin password",
        input: "password",
        inputLabel: "Password",
        inputPlaceholder: "Enter your password",
        inputAttributes: {
        maxlength: "15",
        autocapitalize: "off",
        autocorrect: "off"
        }
    });
    
    if (adminName === adminFullName && password === adminPass) {
        Swal.fire(`Hello ${adminName}: ${password}`);
        dispatch(setIsAdmin(true));
    }else {
        Swal.fire("Wrong Password!","You entered: "+password + " " +adminName,"error");
        dispatch(setIsAdmin(false));
    }
};

export default handlePassword;