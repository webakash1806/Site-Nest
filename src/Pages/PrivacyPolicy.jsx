import React from 'react';

const PrivacyPolicy = () => {
    return (
        <>
            {/* Privacy Policy Section */}
            <div className='bg-white px-[5vw] py-16 text-center'>
                <h1 className='sora-600 text-[2rem] text-[#0A165D] mb-6'>Privacy Policy</h1>
                <p className='sora-400 leading-[1.8rem] text-[#535760] max-w-[45rem] mx-auto'>
                    At Binary Wise Tech, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website.
                </p>
            </div>

            {/* Information We Collect Section */}
            <div className='bg-[#F5F6F7] px-[5vw] py-16 text-center'>
                <h1 className='sora-600 text-[2rem] text-[#0A165D] mb-6'>Information We Collect</h1>
                <div className='flex flex-col gap-8 md:flex-row md:justify-around'>
                    <div className='max-w-[20rem] mx-auto'>
                        <h2 className='sora-600 text-[1.5rem] text-[#0A165D] mb-4'>Personal Information</h2>
                        <p className='sora-400 leading-[1.8rem] text-[#535760]'>
                            We may collect personal identification information such as your name, email address, phone number, and other similar information when you book an appointment on our site or fill out a form.
                        </p>
                    </div>
                    <div className='max-w-[20rem] mx-auto'>
                        <h2 className='sora-600 text-[1.5rem] text-[#0A165D] mb-4'>Usage Data</h2>
                        <p className='sora-400 leading-[1.8rem] text-[#535760]'>
                            We may collect information on how our site is accessed and used, such as your IP address, browser type, pages visited, and the time spent on those pages.
                        </p>
                    </div>
                    <div className='max-w-[20rem] mx-auto'>
                        <h2 className='sora-600 text-[1.5rem] text-[#0A165D] mb-4'>Cookies</h2>
                        <p className='sora-400 leading-[1.8rem] text-[#535760]'>
                            We use cookies and similar tracking technologies to track the activity on our website and hold certain information to enhance your experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* How We Use Information Section */}
            <div className='bg-white px-[5vw] py-16 text-center'>
                <h1 className='sora-600 text-[2rem] text-[#0A165D] mb-6'>How We Use Your Information</h1>
                <div className='flex flex-col gap-8 md:flex-row md:justify-around'>
                    <div className='max-w-[20rem] mx-auto'>
                        <h2 className='sora-600 text-[1.5rem] text-[#0A165D] mb-4'>To Provide Services</h2>
                        <p className='sora-400 leading-[1.8rem] text-[#535760]'>
                            We use your information to deliver the services you have requested, including providing customer support and processing transactions.
                        </p>
                    </div>
                    <div className='max-w-[20rem] mx-auto'>
                        <h2 className='sora-600 text-[1.5rem] text-[#0A165D] mb-4'>To Improve Our Services</h2>
                        <p className='sora-400 leading-[1.8rem] text-[#535760]'>
                            We may use the data collected to analyze trends, monitor the effectiveness of our services, and improve the content and functionality of our site.
                        </p>
                    </div>
                    <div className='max-w-[20rem] mx-auto'>
                        <h2 className='sora-600 text-[1.5rem] text-[#0A165D] mb-4'>To Communicate With You</h2>
                        <p className='sora-400 leading-[1.8rem] text-[#535760]'>
                            We may use your information to contact you with newsletters, marketing or promotional materials, and other information that may be of interest to you.
                        </p>
                    </div>
                </div>
            </div>

            {/* Security Section */}
            <div className='bg-[#F5F6F7] px-[5vw] py-16 text-center'>
                <h1 className='sora-600 text-[2rem] text-[#0A165D] mb-6'>Security of Your Information</h1>
                <p className='sora-400 leading-[1.8rem] text-[#535760] max-w-[45rem] mx-auto'>
                    We take your security seriously and implement industry-standard measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                </p>
            </div>

            {/* Your Rights Section */}
            <div className='bg-white px-[5vw] py-16 text-center'>
                <h1 className='sora-600 text-[2rem] text-[#0A165D] mb-6'>Your Rights</h1>
                <p className='sora-400 leading-[1.8rem] text-[#535760] max-w-[45rem] mx-auto'>
                    You have the right to access, correct, or delete your personal data. If you wish to exercise these rights, please contact us at contact@binarywisetech.com.
                </p>
            </div>

            {/* Changes Section */}
            <div className='bg-[#F5F6F7] px-[5vw] py-16 text-center'>
                <h1 className='sora-600 text-[2rem] text-[#0A165D] mb-6'>Changes to This Policy</h1>
                <p className='sora-400 leading-[1.8rem] text-[#535760] max-w-[45rem] mx-auto'>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
                </p>
            </div>
        </>
    );
};

export default PrivacyPolicy;
