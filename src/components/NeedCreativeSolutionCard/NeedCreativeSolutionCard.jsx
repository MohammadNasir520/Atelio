import React from 'react';
import Button from '../ui/Button';

const NeedCreativeSolutionCard = () => {
    return (
        <div>
            <div className=' flex justify-center items-center flex-col text-white space-y-0 py-20 '>
                <h1 className='fontFranklin'>Do You NEEd Any</h1>
                <h1 className='bricolage-grotesque-baseTextFont font-bold'>Creative Solution?</h1>
                <Button bgColor={"bg-green-600"} hashLink={"/contact"}>Send us a message</Button>
            </div>
        </div>
    );
};

export default NeedCreativeSolutionCard;