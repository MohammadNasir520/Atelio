import React from 'react';
import TeamBanner from './TeamPageBanner';
import TeamMemberCard from './TeamMemberCard';
import Button from '../../components/ui/Button';

const TeamPage = () => {
    return (
        <div className='bg-black '>
            <TeamBanner></TeamBanner>

            <div className='lg:mt-[600px]'>

                <TeamMemberCard></TeamMemberCard>
            </div>

            <div className='flex justify-center'>
                <Button bgColor={"bg-green-600"}>View Our Works</Button>
            </div>
            <div className=' flex justify-center items-center flex-col text-white space-y-0 py-28'>
                <h1 className='fontFranklin'>Do You NEEd Any</h1>
                <h1 className='bricolage-grotesque-baseTextFont '>Creative Solution?</h1>
                <Button bgColor={"bg-green-600"}>Send us a message</Button>
            </div>
        </div>
    );
};

export default TeamPage;