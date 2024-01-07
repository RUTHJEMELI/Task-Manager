import React from 'react';

const Footer = () => {
    const date = new Date();

    // Get individual date components
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' }); // Format month as a string
    const year = date.getFullYear();

    // Format time
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`;

    // Create the dateInfo string
    const dateInfo = `${month} ${day}, ${year} ${time}`;

    // Calculate the current year for the copyright notice
    const currentYear = new Date().getFullYear();

    return (
        <div className='bg-green-700 text-white text-center my-4 py-4'>
            <p>{dateInfo}</p>
            <p>&copy; {currentYear} Jemeli The Dev</p>
        </div>
    );
};

export default Footer;
