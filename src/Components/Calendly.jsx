import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyButton = () => {

    return (
        <>
            <div className="flex items-center justify-center w-full h-full bg-gray-200">

                <InlineWidget
                    styles={{
                        height: '1500px',
                        padding: '10px',
                        maxWidth: '1500px',
                        width: '96vw'
                    }}
                    pageSettings={{

                        backgroundColor: 'fff',
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
                        primaryColor: '2A4CFF',
                        textColor: '040D43'
                    }}
                    url="https://calendly.com/binarywisetech" />
            </div>
        </>
    );
};

export default CalendlyButton;
