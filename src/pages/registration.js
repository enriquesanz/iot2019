import React from "react";
import { Link } from 'gatsby'
import Sponsors from "../components/sponsors";
import Publishers from "../components/publishers";
import Layout from '../components/layout'
import SEO from '../components/seo'

const CFPPage = () => (
<Layout>
  <SEO
      title="Registration"
      keywords={[`iot2019`, `conference`, `iot` ]}
    />
  <div className="flex flex-col md:flex-row items-center">
    <div className="md:w-3/3 md:mr-8">
      <p className="border-l-4 border-red-light  font-sans leading-normal text-lg pl-4 text-justify">
      <h1 className="text-grey-darker font-serif">Registration</h1>
       <br /><br />
      Cooming soon (TBA)
      <br /><br />
    

      </p>

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

export default CFPPage;
