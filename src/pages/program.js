import React from "react";
import Sponsors from "../components/sponsors";
import Layout from '../components/layout'
import SEO from '../components/seo'

const ProgramPage = () => (
<Layout>
  <SEO
      title="Program"
      keywords={[`iot2019`, `conference`, `iot` ]}
    />
  
  <div className="flex flex-col md:flex-row items-center">
    <div className="md:w-3/3 md:mr-8">
      <p className="border-l-4 border-red-light  font-sans leading-normal text-lg pl-4 text-justify">
        <h1 className="text-grey-darker font-serif">Program</h1>
         <br />

          <div className="block md:flex xl:flex">
            <p className="font-sans leading-loose pl-8 ">
              Program will be announced soon.
          
            </p>
          </div>
    
    </p>
    
    <div className="block md:flex xl:flex">
        <p className="font-sans leading-loose pl-8 ">
         </p>
    </div>

    <br />
        
    <br/><br/>
    <br/><br/>

    <p>
        {/*<Publishers />*/}
        <Sponsors />
    </p>

    </div>
  </div>

</Layout>

);

export default ProgramPage;
