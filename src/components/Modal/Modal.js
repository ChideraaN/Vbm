import React, { useState } from 'react';

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
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    zIndex: 1001, // Ensure modal is above the overlay
    minWidth: '300px',
  };

  return (
    <div>
      <div style={overlayStyle} onClick={onClose}></div>
      <div style={modalStyle}>
  {children}
  {/* Desktop icon */}
  <img
    src='images/close.png'
    height={32}
    width={32}
    onClick={onClose}
    style={{ position: 'absolute', top: '10px', right: '20px', cursor: 'pointer', display: 'none' }}
    className="desktop-icon"
  />
  {/* Mobile icon */}
  <img
    src='images/icons8-cross-50.png'
    height={32}
    width={32}
    onClick={onClose}
    style={{ position: 'absolute', top: '10px', right: '20px', cursor: 'pointer' }}
    className="mobile-icon"
  />
</div>

    </div>
  );
};

const Modal = ({ openModal, closeModal, isModalOpen }) => {
  return (
    <div>
      <CustomModal isOpen={isModalOpen} onClose={closeModal}>
        <div className="modal-content">
          <div className='col-62' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/imgs/vbm-logo-large.png" width={100} height={100} alt="" />
            <h2 style={{ fontFamily: 'DrukWideBold', color: '#967029', textAlign: 'center' }}>NEVER STOCK AVAILABLE</h2>
            <button
              style={{
                fontFamily: 'DrukWideBold',
                color: 'white',
                background: 'black',
                textAlign: 'center',
                border: 'none',
                padding: '10px 40px',
                borderRadius: '10px',
                marginTop: '10px',
              }}
            >
              FOLLOW US
            </button>
          </div>
          <div className='col-62' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="images/irish_influencer.jpeg" width="100%" height="100%" alt="" />
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default Modal;
