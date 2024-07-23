import React from 'react';

const Loader: React.FC = () => {
    return (
        <div id="loader" className="d-flex justify-content-center align-items-center flex-column">
            <img src="https://react-pdf.org/images/logo.png" alt="loader" className="mb-5 App-logo" />
            <p>Loading...</p>
        </div>
    )
}

export default Loader
