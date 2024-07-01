import React from 'react';
import WorkBanner from './WorkPageBanner';
import Service from '../../components/Service/Service';
import Reviews from '../../components/Reviews/Reviews';
import BrainsBehind from '../../components/BrainsBehind/BrainsBehind';
import DetailCount from '../../components/DetailCount/DetailCount';
import RecentWorks from './RecentWorks';
import { useNavigate } from 'react-router-dom';

const WorkPage = () => {
    const navigate = useNavigate()
    const loadProductByCategory = () => {

        // navigate("/recent-work")
    }
    return (
        <div>
            <WorkBanner></WorkBanner>

            <Service btnFunction={loadProductByCategory} hashLink={"/work#recent-work"}></Service>
            <Reviews></Reviews>
            <BrainsBehind></BrainsBehind>
            <DetailCount></DetailCount>

            <RecentWorks></RecentWorks>

        </div>
    );
};

export default WorkPage;