import React, { useEffect, useState } from 'react';
import WorkBanner from './WorkPageBanner';
import Service from '../../components/Service/Service';
import Reviews from '../../components/Reviews/Reviews';
import BrainsBehind from '../../components/BrainsBehind/BrainsBehind';
import DetailCount from '../../components/DetailCount/DetailCount';
import RecentWorks from './RecentWorks';
import { useNavigate } from 'react-router-dom';
import NeedCreativeSolutionCard from '../../components/NeedCreativeSolutionCard/NeedCreativeSolutionCard';

const WorkPage = () => {
    const navigate = useNavigate()
    const [category, setCategory] = useState("logos&marks")
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/data/data.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(products => setData(products?.filter((product) => product?.category == category)))

    }, [category])
    console.log(data)

    return (
        <div className=''>
            <WorkBanner></WorkBanner>

            <Service setCategory={setCategory} hashLink={"/work#recent-work"}></Service>
            <Reviews></Reviews>
            <BrainsBehind></BrainsBehind>
            <DetailCount></DetailCount>

            <RecentWorks data={data}></RecentWorks>

            <NeedCreativeSolutionCard text="black"></NeedCreativeSolutionCard>

        </div>
    );
};

export default WorkPage;