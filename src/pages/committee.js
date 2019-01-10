import React from "react";
import Layout from '../components/layout'
import Sponsors from "../components/sponsors";
import Publishers from "../components/publishers";


const CommitteePage = () => (
    <Layout>
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-2/3 md:mr-8">
        <p className="border-l-4 border-red-light text-grey-darker font-serif leading-loose pl-4 text-justify ">
          <h1>Organizers</h1>
        </p>
        <br />
        <p className="font-serif leading-loose pl-4 text-justify">
          <h2 className="text-teal">Conference Chairs:</h2>

          <div className="flex items-center">
            <img className="w-12 h-12 rounded-full mr-4" src="https://morelab.deusto.es/media/persons/diego-lopez-de-ipina_JnzXjHd.jpg" alt="Avatar of Diego López de Ipiña" />
            <div className="text-sm">
              <p className="text-black leading-none text-lg font-sans">Diego López de Ipiña</p>
              <p className="text-grey-dark ">University of Deusto, Spain</p>
            </div>
          </div>
          <br />
          <div className="flex items-center">
          <img className="w-12 h-12 rounded-full mr-4" src="http://kyriakos.ae.gatech.edu/Vamvoudakis/Photo-0013or.jpg" alt="Avatar of Kyriakos G. Vamvoudakis" />
            <div className="text-sm">
              <p className="text-black leading-none text-lg font-sans">Kyriakos G. Vamvoudakis</p>
              <p className="text-grey-dark">Georgia Institute of Technology, USA</p>
            </div>
          </div>
          <br />
          <h2 className="text-teal">Technical Program Chairs:</h2>
          <div className="flex items-center">
            <img className="w-12 h-12 rounded-full mr-4" src="https://morelab.deusto.es/media/persons/diego-lopez-de-ipina_JnzXjHd.jpg" alt="Avatar of Karin Anna Hummel" />
            <div className="text-sm">
              <p className="text-black leading-none text-lg font-sans">Karin Anna Hummel</p>
              <p className="text-grey-dark">JKU Linz, Austria</p>
            </div>
          </div>
          <br />
          <div className="flex items-center">
          <img className="w-12 h-12 rounded-full mr-4" src="http://kyriakos.ae.gatech.edu/Vamvoudakis/Photo-0013or.jpg" alt="Avatar of David Boyle" />
            <div className="text-sm">
              <p className="text-black leading-none text-lg font-sans">David Boyle</p>
              <p className="text-grey-dark">Imperial College, UK</p>
            </div>
          </div>
          <br />
          <div className="flex items-center">
          <img className="w-12 h-12 rounded-full mr-4" src="http://kyriakos.ae.gatech.edu/Vamvoudakis/Photo-0013or.jpg" alt="Avatar of Matthias Kovatsch" />
            <div className="text-sm">
              <p className="text-black leading-none text-lg font-sans">Matthias Kovatsch</p>
              <p className="text-grey-dark">Huawei, Germany</p>
            </div>
          </div>

          <br />
          <h2 className="text-teal">Demo/Poster Chair:</h2>

            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src="https://morelab.deusto.es/media/persons/diego-lopez-de-ipina_JnzXjHd.jpg" alt="Avatar of Kimberly Garcia" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans"> Kimberly Garcia</p>
                <p className="text-grey-dark">Siemens, USA</p>
              </div>
            </div>
            <br />
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src="http://kyriakos.ae.gatech.edu/Vamvoudakis/Photo-0013or.jpg" alt="Avatar of Frank A. Kraemer" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Frank A. Kraemer</p>
                <p className="text-grey-dark">NTNU, Norway</p>
              </div>
            </div>

          <br />
          <h2 className="text-teal">Workshop Chairs:</h2>

            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src="https://morelab.deusto.es/media/persons/diego-lopez-de-ipina_JnzXjHd.jpg" alt="Avatar of Antonio Jara" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Antonio Jara</p>
                <p className="text-grey-dark">HES-SO, Switzerland</p>
              </div>
            </div>
            <br />
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src="http://kyriakos.ae.gatech.edu/Vamvoudakis/Photo-0013or.jpg" alt="Avatar of J. Martin Serrano" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">J. Martin Serrano</p>
                <p className="text-grey-dark">Insight NUI Galway, Ireland</p>
              </div>
            </div>

          <br /> 
          <h2 className="text-teal">Doctoral Colloquium Chairs:</h2>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src="https://morelab.deusto.es/media/persons/diego-lopez-de-ipina_JnzXjHd.jpg" alt="Avatar of Iñaki Vazquez" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Iñaki Vazquez</p>
                <p className="text-grey-dark">University of Deusto, Spain</p>
              </div>
            </div>
            <br />
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src="http://kyriakos.ae.gatech.edu/Vamvoudakis/Photo-0013or.jpg" alt="Avatar of Simon Mayer " />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Simon Mayer </p>
                <p className="text-grey-dark">University of St. Gallen, Switzerland</p>
              </div>
            </div>
            
          <br />
          <h2 className="text-teal">Local Arrangements Chair:</h2>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src="http://kyriakos.ae.gatech.edu/Vamvoudakis/Photo-0013or.jpg" alt="Avatar of Diego Casado-Mansilla" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Diego Casado-Mansilla</p>
                <p className="text-grey-dark">University of Deusto</p>
              </div>
            </div>

          <br />
          <h2 className="text-teal">Industrial Chairs:</h2>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src="http://kyriakos.ae.gatech.edu/Vamvoudakis/Photo-0013or.jpg" alt="Avatar of Josu Bilbao" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Josu Bilbao</p>
                <p className="text-grey-dark">IK4-Ikerlan, Spain</p>
              </div>
            </div>
            <br />
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src="http://kyriakos.ae.gatech.edu/Vamvoudakis/Photo-0013or.jpg" alt="Avatar of Konrad Diwold" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Konrad Diwold</p>
                <p className="text-grey-dark">Pro2Future, Austria</p>
              </div>
            </div>
          
          <br />
          <h2 className="text-teal">Spanish Assembly Chairs:</h2>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src="http://kyriakos.ae.gatech.edu/Vamvoudakis/Photo-0013or.jpg" alt="Avatar of Aitor Urbieta" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Aitor Urbieta</p>
                <p className="text-grey-dark">IK4-Ikerlan, Spain</p>
              </div>
            </div>
            <br />
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src="http://kyriakos.ae.gatech.edu/Vamvoudakis/Photo-0013or.jpg" alt="Avatar of Felix Villanueva" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Felix Villanueva</p>
                <p className="text-grey-dark">UCLM, Spain</p>
              </div>
            </div>
            
          <br />
          <h2 className="text-teal">Web Chairs:</h2>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src="http://kyriakos.ae.gatech.edu/Vamvoudakis/Photo-0013or.jpg" alt="Avatar of Enrique Sanz" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Enrique Sanz</p>
                <p className="text-grey-dark">University of Deusto, Spain</p>
              </div>
            </div>
            <br />
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src="http://kyriakos.ae.gatech.edu/Vamvoudakis/Photo-0013or.jpg" alt="Avatar of Anne M. Irizar" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">Anne M. Irizar</p>
                <p className="text-grey-dark">University of Deusto, Spain</p>
              </div>
            </div>
        
          <br />  
          <h2 className="text-teal">Publicity/Social Media Chairs:</h2>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src="http://kyriakos.ae.gatech.edu/Vamvoudakis/Photo-0013or.jpg" alt="Avatar of TBA" />
              <div className="text-sm">
                <p className="text-black leading-none text-lg font-sans">TBA</p>
                <p className="text-grey-dark"></p>
              </div>
            </div>

          <br />
          <h2 className="text-teal">Steering committee:</h2>
            <ul>
              <li>Kai Kunze (Keio University, Japan)</li>
              <li>Simon Mayer (Univ of St Gallen, Switzerland)</li>
              <li>Hao Min (Fudan University, China)</li>
              <li>Marc Langheinrich (USI, Switzerland)</li>
              <li>Friedemann Mattern (ETH Zurich, Switzerland)</li>
              <li>Florian Michahelles (Siemens, USA)</li>
              <li>Jun Murai (Keio University, Japan)</li>
              <li>Albrecht Schmidt (LMU Munich, Germany)</li>
              <li>Stefan Schneegass (University of Duisburg-Essen, Germany)</li>
              <li>Lirong Zheng (KTH, Sweeden & Fudan University, China)</li>
            </ul>

        </p>

        <br />
        <p className="font-serif leading-loose pl-4 text-justify">
          <h2 className="text-teal">Program Committee:</h2>
            <ul>
              <li>TBA</li>
            </ul>
        </p>
        <br /><br />
        <p>
          <Publishers />
          <Sponsors />

        </p>
      </div>
  </div>


  </Layout>
);

export default CommitteePage;