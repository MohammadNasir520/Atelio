import React from 'react';
import TeamBanner from './TeamPageBanner';
import TeamMemberCard from './TeamMemberCard';

const TeamPage = () => {
    return (
        <div>
            <TeamBanner></TeamBanner>

            <div className='lg:mt-[600px]'>

                <TeamMemberCard></TeamMemberCard>
            </div>
        </div>
    );
};

export default TeamPage;