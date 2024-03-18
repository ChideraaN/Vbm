import React, { useState } from 'react';
import Calendar from 'react-calendar';
import emailjs from '@emailjs/browser';

const CustomModal = ({ isOpen, onClose, children }) => {
    const overlayStyle = {
        display: isOpen ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
        zIndex: 1000,
    };

    const modalStyle = {
        display: isOpen ? 'block' : 'none',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        zIndex: 1001, // Ensure modal is above the overlay
        height:'auto',
        width:'auto',
        borderRadius: '20px !important',
        
    };

    return (
        <div>
            <div style={overlayStyle} onClick={onClose}></div>
            <div style={modalStyle}>
                {children}
                <img
                    src='images/icons8-cross-50.png'
                    height={50}
                    width={50}
                    onClick={onClose}
                    style={{ position: 'absolute', top: '10px', right: '20px', cursor: 'pointer' }}
                />
            </div>
        </div>
    );
};

const time = [
    {
        time: '03:00 PM',
    },
    {
        time: '04:00 PM',
    },
    {
        time: '05:00 PM',
    },
    {
        time: '06:00 PM',
    },
    {
        time: '07:00 PM',
    },
    {
        time: '08:00 PM',
    },
]

const TimeModal = ({ openModal, closeModal, isModalOpen }) => {
    const [value, onChange] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(''); // State to hold the selected time

    // Handle date change
    const handleDateChange = (newValue) => {
        onChange(newValue);
    };

    // Handle time selection
    const handleTimeSelection = (time) => {
        setSelectedTime(time);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = 'service_5ea1t9n';
        const templateId = 'template_rpd6vpw';
        const publicKey = 'KdQihMQM0l6ibmgts';

        // Create a new object that contains dynamic template params
        const templateParams = {
            date: value.toLocaleDateString(), // Selected date
            time: selectedTime, // Selected time
        };

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                // Add any additional logic you want after the email is sent
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };
    return (
        <div>
            <CustomModal isOpen={isModalOpen} onClose={closeModal}>
                <div className="modal-content2">
                    <div className='col-6' style={{  background: '#000',color:'white' }}>
                        <p class="appointo-product-name" id="appointo-product-name">VBM HQ Session</p>
                        <p class="appointo-location" id="appointo-location">
                            Booking will be confirmed after selecting time and purchasing slots</p>
                        <div className="calendar" style={{ padding: '30px 0px' }}>
                            <Calendar onChange={handleDateChange} value={value} />
                        </div>
                    </div>
                    <div className='col-6' style={{ background:'#ebebf0' }}>

                        <p class="slots" id="appointo-location">
                            Available Slots</p>
                        <div className="calendar" style={{ padding: '30px 0px' }}>
                        {time.map((time, index) => (
                        <div
                            className={"available-slots" + (selectedTime === time.time ? " active-time" : "")}
                            key={index}
                            onClick={() => handleTimeSelection(time.time)}
                        >
                            <h3>{time.time}</h3>
                        </div>
                    ))}

                        </div>
                        <div className='' style={{ display: 'flex', justifyContent: 'end' }}>

                            <button type="submit" className="submit-button"  onClick={handleSubmit} style={{  cursor:'pointer' }}>SEND</button>
                        </div>
                    </div>

                </div>
            </CustomModal>
        </div>
    );
};

export default TimeModal;
