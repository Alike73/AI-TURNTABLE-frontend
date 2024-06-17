import React, { useEffect, useState } from 'react';

const Footer = () => {

    const [year, setYear] = useState(null);
    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="py-3 my-4">
            <p className="text-center text-body-secondary">© { year } Alec Dev</p>
            <p className="text-center text-body-secondary">
                If you have any questions just mail me:
                <a className='ms-2' href="#abc">alimzhanisla@gmail.com</a>
            </p>
        </footer>
    )
};

export default Footer;