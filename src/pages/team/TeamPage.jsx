import React from 'react';
import TeamBanner from './TeamPageBanner';
import TeamMemberCard from './TeamMemberCard';
import Button from '../../components/ui/Button';
import NeedCreativeSolutionCard from '../../components/NeedCreativeSolutionCard/NeedCreativeSolutionCard';

const TeamPage = () => {
    return (
        <div className='bg-black '>
            <TeamBanner></TeamBanner>

            <div className=''>

                <TeamMemberCard></TeamMemberCard>
            </div>

            <div className='flex justify-center'>
                <Button bgColor={"bg-green-600"} hashLink={'/work'}>View Our Works</Button>
            </div>
            <NeedCreativeSolutionCard></NeedCreativeSolutionCard>
        </div>
    );
};

export default TeamPage;