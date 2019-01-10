import React from 'react'
import Deusto from "../images/deusto.jpg";
import Hotels from "../images/hotels.jpg";
import Layout from '../components/layout'
import Sponsors from "../components/sponsors";
import Publishers from "../components/publishers";

const AttendingPage = () => (
  <Layout>
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-3/3 md:mr-8">
        <p className="border-l-4 border-red-light text-grey-darker font-serif leading-loose pl-4 text-justify">
          <h1 >Attending and facilities</h1>
        </p>
        <br />
        <p className="font-sans leading-normal text-xl text-justify">
          The conference and the workshops will take place at the University of Deusto.<br />
          <strong>Address:</strong> Avenida de las universidades, 24 48007 Bilbao (Spain) - <a class="no-underline text-teal" href="https://www.google.es/maps/place/University+of+Deusto/@43.2712452,-2.9385576,15z/data=!4m2!3m1!1s0x0:0x6ea1bd3e8bae3141?ved=2ahUKEwiNnKbD7eDfAhXIxIUKHQ8DCAUQ_BIwDnoECAYQCA">Google Maps</a> -  
        </p>
        <br /><br />

        <p className="font-sans leading-normal text-lg text-justify">
           <h2 className="text-teal"> About the university </h2>
              
              The University of Deusto was inaugurated in 1886.  The central headquarters of the University of Deusto is located on the opposite side of the estuary, facing the Bilbao Guggenheim Museum, an emblematic symbol of the significant transformation of Bilbao during the last three decades.
              - <a class="no-underline text-teal" href="https://www.deusto.es/cs/Satellite/deusto/en/university-deusto?cambioidioma=si">Website</a> -

        </p>
        <br />
        <img src={Deusto} />
        <br /><br />
        <p className="font-sans leading-normal text-lg text-justify">
           <h2 className="text-teal"> About the city </h2>
              
              Nowadays, Bilbao is the centre of a metropolitan area with more than one million inhabitants, a city traditionally open to Europe. Bilbao is a city with plenty of charisma and personality; traditional and avantgarde at the same time. From the narrow streets of the Casco Viejo [Old Town] to the Gran Vía and the New Bilbao, there is a whole world of history and legends that have turned the small port on the banks of the river into a world benchmark. A friendly space for those who are interested in innovation, architecture, art, technology, design, leisure, gastronomy and culture.

        </p>
        <br /><br />
        <p className="font-sans leading-normal  text-lg text-justify">
           <h2 className="text-teal"> Arriving </h2>
            

        </p>
        <img src={Hotels} />
        <br /><br />
         <p className="font-sans leading-normal  text-lg text-justify">
           <h2 className="text-teal"> Hotels </h2>
              
              Bilbao  is a tourist centre and convention city, and thus offers a large variety of hotel suitable for any budget, either  within easy walking distance of the conference site or easily reachable with a short bus or tram ride.
              <br />

            The Organizing Committee will secure preferential rates for the Conference participants. You will be able to view more information and book your accommodation through the online registration system in the near future. A few examples of the hotels around are given below:


        </p>
      <br />
      
      </div>

    </div>

    <p >
    <br /><br /><br /><br />
        <Publishers />
        <Sponsors />
      </p>
  </Layout>
);

export default AttendingPage
