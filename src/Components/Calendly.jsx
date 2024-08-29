import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyButton = () => {
    return (
        <div className="w-full h-full bg-gray-200">
            <InlineWidget
                styles={{
                    height: '1000px'
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
    );
};

export default CalendlyButton;
