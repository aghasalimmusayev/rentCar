import React, { useState, useEffect } from 'react';

const GoTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    borderRadius: '8px',
                    backgroundColor: '#333',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    zIndex: 1000,
                }}
            ><i class="fa-solid fa-arrow-up-long"></i>
            </button>
        )
    );
};

export default GoTop;
