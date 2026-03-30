import React,{ use } from "react"
import AvailableInfos from '../components/AvailableInfos';

const Infos = ({infoPromise}) => {
    console.log(infoPromise);
    const informations = use(infoPromise);
    console.log(informations);
    return (
        <>
            <div>Info:{informations.length}</div>
             <AvailableInfos informations={informations}></AvailableInfos>
        </>
        
    );
}

export default Infos