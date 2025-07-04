
import { useEffect, useState } from "react";
import Work_VIsa_Card from "./Work_VIsa_Card";

const Work_Visa_Cards = () => {

    const [works,setWorks]=useState([]);

    // Show All Button Data Selection
    const [dataLength,setDataLength]=useState(3);

    useEffect(()=>{
        fetch('workvisa.json')
        .then(res=>res.json())
        .then(data=>setWorks(data));
    },[])

    return (
        <div className="px-4 container mx-auto">
            {/* Work visa */}
<h1 className="text-center text-4xl font-bold my-6 text-[#005a31]">Work Visa Oppurtunity</h1>

<div className="grid lg:grid-cols-3 gap-4">
     {
        works.slice(0,dataLength).map(work=> <Work_VIsa_Card key={work.id} work={work}></Work_VIsa_Card>)
     }
</div>
<div className="flex justify-center my-3">
    <div className={dataLength === works.length && 'hidden'}>
     <button onClick={()=>setDataLength(works.length)} className="hover:shadow-[#005a31] hover:shadow-lg btn text-lg hover:bg-[#005a31] hover:text-[#ffffff] bg-white text-[#005a31]  border-[1.5px] border-[#005a31]">See All</button>   
    </div>
    
</div>
        </div>
    );
};

export default Work_Visa_Cards;