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
import Ruben from "../images/committee/ruben.png";
import Oihane from "../images/committee/oihane.jpg";


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
          <h2 className="text-teal">Networking Chairs:</h2>
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
          <h2 className="text-teal">Publication Chairs:</h2>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={Oihane} alt="Avatar of Oihane Gómez" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Oihane Gómez</p>
                <p className="text-grey-dark">University of Deusto, Spain</p>
              </div>
            </div>
            <br />
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={Ruben} alt="Avatar of Rubén Sanchez" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Rubén Sanchez</p>
                <p className="text-grey-dark">University of Deusto, Spain</p>
              </div>
            </div>
        
          <br />  
          <h2 className="text-teal">Publicity Chair:</h2>
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
              
              <li>Federica Cena, University of Turin (Italy)</li>
              <li>Krzysztof Janowicz, UC Santa Barbara (USA)</li>              
              <li>Marc Langheinrich, USI (Switzerland)</li>
              <li>Simon Mayer, Univ of St Gallen, (Switzerland)</li>
              <li>Florian Michahelles, Siemens (USA)</li>
              <li>Hao Min, Fudan University (China)</li>
              <li>Jun Murai, Keio University (Japan)</li>
              <li>Albrecht Schmidt, LMU Munich (Germany)</li>
              <li>Stefan Schneegass, University of Duisburg-Essen (Germany)</li>
            </ul>

        </p>

        <br />
        <p className="font-serif leading-loose pl-4 text-justify">
          <h2 className="text-teal">Program Committee:</h2>
            <ul>
              <li>Mihai Bace, ETH Zurich (Switzerland)</li>
              <li>Payam Barnaghi, University of Surrey (UK)</li>
              <li>Michael Beigl,  Karlsruhe Institute of Technology (Germany)</li>
              <li>Fatima Z. Benhamida,  ESI (Algeria)</li>
              <li>Olivier  Boissier,  Mines Saint-Etienne (France)</li>
              <li>Iva  Bojic, SMART (USA)</li>
              <li>Raymond  Bond,  Ulster University (Northern Ireland)</li>
              <li>Anei Ciortea, University of St. Gallen (Switzerland)</li>
              <li>Giuseppe Di Modica ,University of Catania (Italy)</li>
              <li>Carolina Fuentes, University of Nottingham  (UK)</li>
              <li>Borja Gamecho, Wimbi Technologies S.L. (Spain)</li>
              <li>Vaggelis Giannikas, University of Bath  (UK)</li>
              <li>Jens Grossklags, Technical University of Munich  (UK)</li>
              <li>Dominique  Guinard, EVRYTHNG  (UK)</li>
              <li>Tâm  Huynh, T-Systems International GmbH (Germany)</li>
              <li>Markel Iglesias Urkia,  Ikerlan  (Spain)</li>
              <li>Dimosthenis  Ioannidis, CERTH/ITI  (Greece)</li>
              <li>Pasquier Jacques, University of Fribourg (Switzerland)</li>
              <li>Stamatis Karnouskos , SAP (Germany)</li>
              <li>Wolfgang Kastner, TU Wien (Austria)</li>
              <li>Zaheer Khan,  University of the West of England Bristol (UK)</li>
              <li>Roman  Kolcun,  Imperial College London (UK)</li>
              <li>Stelios  Krinidis,  CERTH/ITI (Greece)</li>
              <li>Mareike  Kritzler,  Siemens Corporation (Germany)</li>
              <li>Mikel  Larrea,  UPV/EHU (Spain)</li>
              <li>Marino Linaje,  University of Extremadura (Spain)</li>
              <li>Lionel Medini,  LIRIS lab. / Université de Lyon (France)</li>
              <li>Florian  Michahelles, Siemens Corporation (USA)</li>
              <li>Maurice  Mulvenna,  Ulster University (Northern Ireland)</li>
              <li>David  Palma , NTNU (Norway)</li>
              <li>Luigi  Patrono, University of Salento (Italy)</li>
              <li>Alexander  Pflaum , Otto-Friedrich-University Bamberg (Germany)</li>
              <li>Joseph Rafferty,  Ulster University (Northern Ireland)</li>
              <li>Till Riedel,  KIT (Germany)</li>
              <li>Kay  Römer, TU Graz (Austria)</li>
              <li>Petar  Šolić, University of Split FESB (Croatia)</li>
              <li>Aurelia  Tamò-Larrieux, ITSL (Switzerland)</li>
              <li>Silvia Torsi, University of Bari (Italy)</li>
              <li>Kristof  Van Laerhoven, University of Siegen (Germany)</li>
              <li>Mario  Vega-Barbas, Universidad Politécnica de Madrid (Spain)</li>
              <li>Nervo  Verdezoto, University of Leicester (UK)</li>
              <li>Bahtijar Vogel, Malmo University (Norway)</li>
              <li>Felix Wortmann, University of St. Gallen (Switzerland)</li>
              
            </ul>
        </p>
        <br /><br />
        <p className="font-serif leading-loose pl-4 text-justify">
          <h2 className="text-teal">Local Committee:</h2>
            <ul>
              <li>Unai Aguilera, University of Deusto (Spain)</li>
              <li>Aitor Almeida, University of Deusto (Spain)</li>
              <li>Cruz E. Borges, University of Deusto (Spain)</li>
              <li>David Bujan, University of Deusto (Spain)</li>
              <li>Oihane Gómez-Carmona, University of Deusto (Spain)</li>
              <li>Anne Irizar-Arrieta, University of Deusto (Spain)</li>
              <li>Jon Legarda, University of Deusto (Spain)</li>
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