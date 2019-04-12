import React from "react";
import { Link } from 'gatsby'
import Sponsors from "../components/sponsors";
import Publishers from "../components/publishers";
import Layout from '../components/layout'
import SEO from '../components/seo'

const RegistrationPage = () => (
<Layout>
  <SEO
      title="Registration"
      keywords={[`iot2019`, `conference`, `iot` ]}
    />
  <div className="flex flex-col md:flex-row items-center">
    <div className="md:w-3/3 md:mr-8">
      <p className="border-l-4 border-red-light  font-sans leading-normal text-lg pl-4 text-justify">
      <h1 className="text-grey-darker font-serif">Registration</h1>
       <br />
      Registration will be open soon.
      <br /><br />


      </p>

      <div className="block md:flex xl:flex">
        <p className="font-sans leading-loose pl-8 ">
          <h2 className="font-serif text-teal">Important dates</h2>

            <ul>
              <li><strong className="text-grey-darker">Early Bird Registration deadline:</strong> September 9, 2019</li>
              <li><strong className="text-grey-darker">Late Registration deadline:</strong> October 7, 2019 </li>
              <li><strong className="text-grey-darker">On-site Registration:</strong> October 22-25, 2019</li>
            </ul>
          <br />
          <h2 className="font-serif text-teal">Conference Fees</h2>
          <table>
          <tbody>
            <tr align="center">
              <td width="160"></td>
              <td width="160"><strong>Early (9th Sept.)</strong></td>
              <td width="160"><strong>Late (<b>7th</b> Oct.)</strong></td>
              <td width="160"><strong>On-site</strong></td>
            </tr>
            <tr align="center">
              <td width="160" align="left"><strong>Full Registration</strong></td>
              <td width="160">500€</td>
              <td width="160">600€</td>
              <td width="160">650€</td>
            </tr>
            <tr align="center">
              <td width="160" align="left"><strong>ACM/SIG-Member</strong></td>
              <td width="160">450€</td>
              <td width="160">550€</td>
              <td width="160">650€</td>
            </tr>
            <tr align="center">
              <td width="160" align="left"><strong>Student Registration</strong></td>
              <td width="160">350€</td>
              <td width="160">400€</td>
              <td width="160">650€</td>
            </tr>
            <tr align="center"> 
              <td width="160" align="left"><strong>1-day Registration</strong></td>
              <td width="160">250€</td>
              <td width="160">300€</td>
              <td width="160">330€</td>
            </tr>
            <tr align="center">
              <td width="160" align="left"><strong>Workshop Participants</strong></td>
              <td width="160">500€</td>
              <td width="160">600€</td>
              <td width="160">650€</td>
            </tr>
          </tbody>
        </table>
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

export default RegistrationPage;
