import React from "react";
import SEO from '../components/seo'
import Layout from '../components/layout'
import Sponsors from "../components/sponsors";
import Publishers from "../components/publishers";
import Dipina from "../images/committee/dipina.jpg";
import Kyriakos from "../images/committee/kyriakos.jpg";
import Karin from "../images/committee/Karin.jpeg";
import David from "../images/committee/david.jpeg";
import Matthias from "../images/committee/matthias.jpeg";
import Kimberly from "../images/committee/kimberly.jpg";
import Frank from "../images/committee/frank.jpg";
import Antonio from "../images/committee/antonio.jpeg";
import Martin from "../images/committee/martin.jpg";
import Inaki from "../images/committee/inaki.jpg";
import Simon from "../images/committee/simon.jpeg";
import Diego from "../images/committee/diego.jpg";
import Josu from "../images/committee/josu.jpg";
import Konrad from "../images/committee/konrad.jpg";
import Aitor from "../images/committee/aitor.jpg";
import Felix from "../images/committee/felix.jpeg";
import Enrique from "../images/committee/kike.jpg";
import Ane from "../images/committee/ane.jpg";
import Avatar from "../images/committee/avatar.png";
import Latif from "../images/committee/latif.png";


const CommitteePage = () => (
    <Layout>
    <SEO
      title="Committee"
      keywords={[`iot2019`, `conference`, `iot` ]}
    />
    <div className="flex ">
      <div className="md:w-2/3 md:mr-8">
        <p className="border-l-4 border-red-light text-grey-darker font-serif leading-loose pl-4 text-justify ">
          <h1>Organizers</h1>
        </p>
        <br />
        <p className="font-serif leading-loose pl-4 text-justify">
          <h2 className="text-teal">Conference Chairs:</h2>

          <div className="flex items-center">
            <img className="w-12 h-12 rounded-full mr-4" src={Dipina} alt="Avatar of Diego López de Ipiña" />
            <div className="text-sm">
              <p className="text-black leading-none text-lg font-sans">Diego López de Ipiña</p>
              <p className="text-grey-dark ">University of Deusto, Spain</p>
            </div>
          </div>
          <br />
          <div className="flex items-center">
          <img className="w-12 h-12 rounded-full mr-4" src={Kyriakos} alt="Avatar of Kyriakos G. Vamvoudakis" />
            <div className="text-sm">
              <p className="text-black leading-none text-lg font-sans">Kyriakos G. Vamvoudakis</p>
              <p className="text-grey-dark">Georgia Institute of Technology, USA</p>
            </div>
          </div>
          <br />
          <h2 className="text-teal">Technical Program Chairs:</h2>
          <div className="flex items-center">
            <img className="w-12 h-12 rounded-full mr-4" src={Karin} alt="Avatar of Karin Anna Hummel" />
            <div className="text-sm">
              <p className="text-black leading-none text-lg font-sans">Karin Anna Hummel</p>
              <p className="text-grey-dark">JKU Linz, Austria</p>
            </div>
          </div>
          <br />
          <div className="flex items-center">
          <img className="w-12 h-12 rounded-full mr-4" src={David} alt="Avatar of David Boyle" />
            <div className="text-sm">
              <p className="text-black leading-none text-lg font-sans">David Boyle</p>
              <p className="text-grey-dark">Imperial College, UK</p>
            </div>
          </div>
          <br />
          <div className="flex items-center">
          <img className="w-12 h-12 rounded-full mr-4" src={Matthias} alt="Avatar of Matthias Kovatsch" />
            <div className="text-sm">
              <p className="text-black leading-none text-lg font-sans">Matthias Kovatsch</p>
              <p className="text-grey-dark">Huawei, Germany</p>
            </div>
          </div>

          <br />
          <h2 className="text-teal">Demo/Poster Chair:</h2>

            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={Kimberly} alt="Avatar of Kimberly Garcia" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans"> Kimberly Garcia</p>
                <p className="text-grey-dark">Siemens, USA</p>
              </div>
            </div>
            <br />
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={Frank} alt="Avatar of Frank A. Kraemer" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Frank A. Kraemer</p>
                <p className="text-grey-dark">NTNU, Norway</p>
              </div>
            </div>

          <br />

          <h2 className="text-teal">Workshop Chairs:</h2>

            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={Antonio} alt="Avatar of Antonio Jara" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Antonio Jara</p>
                <p className="text-grey-dark">HES-SO, Switzerland</p>
              </div>
            </div>
            <br />
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={Martin} alt="Avatar of J. Martin Serrano" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">J. Martin Serrano</p>
                <p className="text-grey-dark">Insight NUI Galway, Ireland</p>
              </div>
            </div>

          <br /> 
          <h2 className="text-teal">Doctoral Colloquium Chairs:</h2>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={Inaki} alt="Avatar of Iñaki Vazquez" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Iñaki Vazquez</p>
                <p className="text-grey-dark">University of Deusto, Spain</p>
              </div>
            </div>
            <br />
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={Simon} alt="Avatar of Simon Mayer " />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Simon Mayer </p>
                <p className="text-grey-dark">University of St. Gallen, Switzerland</p>
              </div>
            </div>
            
          <br />
          <h2 className="text-teal">Local Arrangements Chair:</h2>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={Diego} alt="Avatar of Diego Casado-Mansilla" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Diego Casado-Mansilla</p>
                <p className="text-grey-dark">University of Deusto</p>
              </div>
            </div>

          <br />
          <h2 className="text-teal">Industrial Chairs:</h2>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={Josu} alt="Avatar of Josu Bilbao" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Josu Bilbao</p>
                <p className="text-grey-dark">IK4-Ikerlan, Spain</p>
              </div>
            </div>
            <br />
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={Konrad} alt="Avatar of Konrad Diwold" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Konrad Diwold</p>
                <p className="text-grey-dark">Pro2Future, Austria</p>
              </div>
            </div>
          
          <br />
          <h2 className="text-teal">Spanish Assembly Chairs:</h2>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={Aitor} alt="Avatar of Aitor Urbieta" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Aitor Urbieta</p>
                <p className="text-grey-dark">IK4-Ikerlan, Spain</p>
              </div>
            </div>
            <br />
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={Felix} alt="Avatar of Felix Villanueva" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Felix Villanueva</p>
                <p className="text-grey-dark">UCLM, Spain</p>
              </div>
            </div>
            
          <br />
          <h2 className="text-teal">Web Chairs:</h2>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={Enrique} alt="Avatar of Enrique Sanz" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Enrique Sanz</p>
                <p className="text-grey-dark">University of Deusto, Spain</p>
              </div>
            </div>
            <br />
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={Ane} alt="Avatar of Anne M. Irizar" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Anne M. Irizar</p>
                <p className="text-grey-dark">University of Deusto, Spain</p>
              </div>
            </div>
        
          <br />  
          <h2 className="text-teal">Publicity/Social Media Chairs:</h2>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={Latif} alt="Avatar of TBA" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Latif Ladid</p>
                <p className="text-grey-dark">University of Luxembourg, Luxembourg</p>
              </div>
            </div>

          <br />
          <h2 className="text-teal"><a class="no-underline text-teal hover:font-bold" href="https://iot-conference.org/sc/" target="_blank" rel="noopener noreferrer"> Steering committee:</a></h2>
            <ul>
              <li>Albrecht Schmidt, LMU Munich (Germany)</li>
              <li>Federica Cena, University of Turin (Italy)</li>
              <li>Florian Michahelles, Siemens (USA)</li>
              <li>Hao Min, Fudan University (China)</li>
              <li>Jun Murai, Keio University (Japan)</li>
              <li>Krzysztof Janowicz, UC Santa Barbara (USA)</li>              
              <li>Marc Langheinrich, USI (Switzerland)</li>
              <li>Simon Mayer, Univ of St Gallen, (Switzerland)</li>
              <li>Stefan Schneegass, University of Duisburg-Essen (Germany)</li>
            </ul>

        </p>

        <br />
        <p className="font-serif leading-loose pl-4 text-justify">
          <h2 className="text-teal">Program Committee:</h2>
            <ul>
              <li>Alexander Pflaum, Fraunhofer (Germany)</li>
              <li>Andrei Ciortea, University of St. Gallen (Switzerland)</li>
              <li>Armin Wasicek, Brocade Communications Inc. (USA) </li>
              <li>Bernhard Anzengruber,Johannes Kepler University (Austria)</li>
              <li>Borja Gamecho, Wimbi Technologies, S.L. (Spain)</li>
              <li>Dan Jiang, Philips Lighting (Netherlands)</li>
              <li>Dave Raggett, W3C (UK)</li>
              <li>David Palma, NTNU (Norway)</li>
              <li>Dominique Guinard, MIT / ETH Zurich / SAP Research (USA)</li>
              <li>Fatima.Z Benhamida, ESI (Algiers)</li>
              <li>Federico Casalegno, Massachusetts Institute of Technology (USA)</li>
              <li>Felix Wortmann, IWI HSG ()</li>
              <li>Florian Michahelles, Siemens Corporation (USA)</li>
              <li>Friedemann Mattern, ETH Zurich (Switzerland)</li>
              <li>George Shaker, University of Waterloo (Canada)</li>
              <li>Gerd Kortuem, Delft University of Technology (Netherlands)</li>
              <li>Gianluca Rizzo, HES-SO Valais (Switzerland)</li>
              <li>Inaki Vazquez, Universidad de Deusto (Spain)</li>
              <li>Iva Bojic, Massachusetts Institute of Technology (USA)</li>
              <li>Jacques Pasquier, Univ. of Fribourg (Switzerland)</li>
              <li>Jens Grossklags, Technical University of Munich (Germany)</li>
              <li>Joachim Walewski, Siemens AG (Germany)</li>
              <li>Kai Kunze, Keio University (Japan)</li>
              <li>Kay Roemer, TU Graz (Austria)</li>
              <li>Kristof Van Laerhoven, University of Siegen (Germany)</li>
              <li>Lionel Médini, LIRIS lab. / University of Lyon (France)</li>
              <li>Maarten Weyn, University of Antwerpen (Belgium)</li>
              <li>Mareike Kritzler, Siemens Corporate Technology (Germany)</li>
              <li>Marino Linaje, Universidad de Extremadura (Spain)</li>
              <li>Markus Funk, Nuance Communications, Inc. (Germany)</li>
              <li>Michael Beigl, TecO, Pervasive Computing Systems (Germany)</li>
              <li>Michael Blackstock, The University of British Columbia (USA)</li>
              <li>Michael Mrissa, Université de Pau et des Pays de l'Adour (France)</li>
              <li>Mihai Bâce, ETH Zurich (Switzerland)</li>
              <li>Olivier Boissier, Mines Saint-Etienne, Institut Henri Fayol (France)</li>
              <li>Olivier Liechti, Univ. of Applied Sciences of Western (Switzerland)</li>
              <li>Payam Barnaghi, University of Surrey (UK)</li>
              <li>Rahul Bhattacharyya, Massachusetts Institute of Technology (USA)</li>
              <li>Roman Kolcun, Imperial College London (UK)</li>
              <li>Ruben Verborgh, Ghent University - IMEC (Belgium)</li>
              <li>Stamatis Karnouskos, SAP (Germany)</li>
              <li>Stefan Schneegass, University of Stuttgart (Germany)</li>
              <li>Sumeet Kumar, Massachusetts Institute of Technology (USA)</li>
              <li>Tam Huynh, T-Systems International GmbH (Germany)</li>
              <li>Till Riedel, TecO, Karlsruhe Institute of Technology (Germany)</li>
              <li>Vaggelis Giannikas, University of Cambridge (UK)</li>
              <li>Wolfgang Kastner, Vienna University of Technology (Austria)</li>
              <li>Zaheer Khan, University of the West of England, Bristol (UK)</li>
            </ul>
        </p>
        <br /><br />
        
      </div>
      
  </div>
  <br/><br/>
  <p>
         {/* <Publishers />*/}
          <Sponsors />

  </p>

  </Layout>
);

export default CommitteePage;