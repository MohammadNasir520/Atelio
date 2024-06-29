import React from 'react';
import Button from '../ui/Button';

const Banner = () => {
    return (
        <div className='bg-slate-300 h-[400px] flex items-center'>
            <div className='w-2/6 lg:ml-32'>
                <h1>We think</h1>
                <h1>Outside the box</h1>
                <h1>For Creative Solution</h1>
                <h1>Solution</h1>
                <Button>View Solutions</Button>
            </div>
        </div>
    );
};

export default Banner;