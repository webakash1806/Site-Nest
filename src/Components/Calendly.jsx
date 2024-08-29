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
                    primaryColor: '040D43',
                    textColor: '040D43'
                }}
                url="https://calendly.com/binarywisetech" />
        </div>
    );
};

export default CalendlyButton;
