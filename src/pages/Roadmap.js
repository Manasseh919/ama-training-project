import {
    RoadmapContent,
    RoadmapTabs,
    RoadmapHeader,
 } from '../component/roadmap';
 
 const Roadmap = () => {
    return (
       <>
          <RoadmapHeader />
          <RoadmapTabs />
          <RoadmapContent />
       </>
    );
 };
 
 export default Roadmap;