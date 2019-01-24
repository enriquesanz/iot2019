import React from 'react'
import Deusto from "../images/deusto.jpg";
import Location from "../images/location.png";
import Plane from "../images/byPlane.png";
import HotelsTable from "../images/mapa.png";
import HotelsMap from "../images/hotels.png";
import Layout from '../components/layout'
import Sponsors from "../components/sponsors";
import Publishers from "../components/publishers";
import SEO from '../components/seo'


const AttendingPage = () => (
  <Layout>
    <SEO
      title="Attending"
      keywords={[`iot2019`, `conference`, `iot` ]}
    />
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-3/3 md:mr-8">
        <p className="border-l-4 border-red-light text-grey-darker font-serif leading-loose pl-4 text-justify">
          <h1 >Attending and facilities</h1>
        </p>
        <br />
        <p className="font-sans leading-normal text-xl text-justify">
          The conference and the workshops will take place at the University of Deusto.<br />
          <strong>Address:</strong> Avenida de las universidades, 24 48007 Bilbao (Spain) - <a class="no-underline text-teal hover:font-bold" href="https://www.google.es/maps/place/University+of+Deusto/@43.2712452,-2.9385576,15z/data=!4m2!3m1!1s0x0:0x6ea1bd3e8bae3141?ved=2ahUKEwiNnKbD7eDfAhXIxIUKHQ8DCAUQ_BIwDnoECAYQCA" target="_blank" rel="noopener noreferrer">Google Maps</a> -  
        </p>
        <br /><br />

        <p className="font-sans leading-normal text-lg text-justify">
           <h2 className="text-teal"> About the university </h2>
              
              The University of Deusto was inaugurated in 1886.  The central headquarters of the University of Deusto is located on the opposite side of the estuary, facing the Bilbao Guggenheim Museum, an emblematic symbol of the significant transformation of Bilbao during the last three decades.
              - <a class="no-underline text-teal hover:font-bold" href="https://www.deusto.es/cs/Satellite/deusto/en/university-deusto?cambioidioma=si" target="_blank" rel="noopener noreferrer">Website</a> -

        </p>
        <br />
        <img src={Deusto} alt="University of Deusto"/>
        <br /><br />
        <p className="font-sans leading-normal text-lg text-justify">
           <h2 className="text-teal"> About the city </h2>
              
              Nowadays, Bilbao is the centre of a metropolitan area with more than one million inhabitants, a city traditionally open to Europe. Bilbao is a city with plenty of charisma and personality; traditional and avantgarde at the same time. From the narrow streets of the Casco Viejo [Old Town] to the Gran Vía and the New Bilbao, there is a whole world of history and legends that have turned the small port on the banks of the river into a world benchmark. A friendly space for those who are interested in innovation, architecture, art, technology, design, leisure, gastronomy and culture.

        </p>
        <br /><br />
        <p className="font-sans leading-normal  text-lg text-justify">
           <h2 className="text-teal"> Arriving </h2>
           <h3 className="text-purple-light"> Location </h3>
           <img src={Location} alt=""/>
           <h3 className="text-purple-light"> Transport </h3>
           <ul className="sm:list-reset">
             <li><strong className="text-grey-darker"> By bus:</strong> See this <a className="no-underline text-teal " href="http://www.termibus.es/lang/en/index.php" target="_blank" rel="noopener noreferrer">link </a> for complete information about companies, prices, timetables and the main cities served by bus. <strong className="text-grey-darker"> Tlf: +34 944 395 077</strong> </li>
             <li><strong className="text-grey-darker"> By train:</strong> Bilbao can be reached by railway from France, the Netherlands, Belgium and Germany. Once delegates reach Hendaye by TGV, they just have to take the <a class="no-underline text-teal hover:font-bold" href="https://www.hendaye-tourisme.fr/en/traveller-information/travel-to-hendaye/by-train/" target="_blank" rel="noopener noreferrer"   >Topo-Train</a> to Irun and then take the bus from Irun to Bilbao. </li>
             <li><strong className="text-grey-darker"> By plane:</strong> 2015 Destinations = 44 (Spain: 18 / Europe 26). Top 10 International: Germany 5 / U.K. 5 / italy: 3/ Switzerland: 2 / Portugal: 2 / France: 2 / Norway: 1 / Romania: 1 / Czech Republic: 1 / Belgium: 1. </li>
             <li>A 20-minutes journey through the Artxanda tunnels or along the BI-631 road separate the Bilbao airport from the center of the city. The traveller has several options to reach the airport or downtown from there: Bus A3247 BILBAO-airport: operates every day of the year with services every 30 minutes.</li>
           </ul>

        </p>
        <img src={Plane} alt="How to reach Bilbao by plane"/>
        <br /><br />
         <p className="font-sans leading-normal  text-lg text-justify">
           <h2 className="text-teal"> Hotels </h2>
              
              Bilbao  is a tourist centre and convention city, and thus offers a large variety of hotel suitable for any budget, either  within easy walking distance of the conference site or easily reachable with a short bus or tram ride.
              <br />

            The Organizing Committee will secure preferential rates for the Conference participants. You will be able to view more information and book your accommodation through the online registration system in the near future. A few examples of the hotels around are given below:

        </p>

      <br />

      <img src={HotelsTable} alt=""/>
      <img src={HotelsMap} alt=""/>
      
      </div>

    </div>

    <p >
    <br /><br /><br /><br />
        {/*<Publishers />*/}
        <Sponsors />
      </p>
  </Layout>
);

export default AttendingPage
