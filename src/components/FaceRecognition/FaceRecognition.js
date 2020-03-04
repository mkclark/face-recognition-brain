import React from 'react';

const FaceRecognition = ({ imageURL }) => {
    return (
        <div className='center'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageURL} width='500px' height='auto'/>
            </div>
        </div>
    );
}

export default FaceRecognition;