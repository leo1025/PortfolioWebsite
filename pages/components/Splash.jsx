import React, { useState } from 'react';

function Splash(props) {
    const [showingSplash, setShowingSplash] = useState(true);

    setTimeout(() => {
        setShowingSplash(false);
    }, 2000);

    return (
        <div>
            <div className={`${showingSplash ? 'splash-container' : 'splash-container-hidden'}`}>
                <div
                    className={`welcome-display ${showingSplash ? 'splash-shown' : 'splash-hidden'}`}
                >
                    <h1>
                        Hello and welcome!
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Splash