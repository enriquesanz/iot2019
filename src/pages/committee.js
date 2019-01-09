import React from "react";
import Layout from '../components/layout'
import Sponsors from "../components/sponsors";
import Publishers from "../components/publishers";

const CommitteePage = () => (
    <Layout>
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-2/3 md:mr-8">
        <p className="border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify">
          <h1>Committee</h1>
        </p>
        <p className="font-serif leading-loose pl-4 text-justify">
          <h2>Conference Chairs:</h2>
            <ul>
              <li>Diego López de Ipiña (University of Deusto, Spain)</li>
              <li>Kyriakos G. Vamvoudakis (Georgia Institute of Technology, USA)</li>
            </ul>

          <h2>Technical Program Chairs:</h2>
            <ul>
              <li>Karin Anna Hummel (JKU Linz, Austria)</li>
              <li>David Boyle (Imperial College, UK)</li>
              <li>Matthias Kovatsch (Huawei, Germany)</li>
            </ul>

          <h2>Demo/Poster Chair:</h2>
            <ul>
              <li>Kimberly Garcia (Siemens, USA)</li>
              <li>Frank A. Kraemer (NTNU, Norway)</li>
            </ul>

          <h2>Workshop Chairs:</h2>
            <ul>
              <li>Antonio Jara (HES-SO, Switzerland)</li>
              <li>J. Martin Serrano (Insight NUI Galway, Ireland)</li>
            </ul>

          <h2>Doctoral Colloquium Chairs:</h2>
            <ul>
              <li>Iñaki Vazquez (University of Deusto, Spain)</li>
              <li>Simon Mayer (University of St. Gallen, Switzerland)</li>
            </ul>

          <h2>Local Liaison Chair:</h2>
            <ul>
              <li>Diego Casado-Mansilla (University of Deusto, Spain)</li>
            </ul>

          <h2>Industrial Chairs:</h2>
            <ul>
              <li>Josu Bilbao (Ikerlan, Spain)</li>
              <li>TBA</li>
            </ul>

          <h2>Spanish Assembly Chairs:</h2>
            <ul>
              <li>Aitor Urbieta (Ikerlan, Spain)</li>
              <li>Felix Villanueva (UCLM, Spain)</li>
            </ul>

          <h2>Web Chairs:</h2>
            <ul>
              <li>Anne M. Irizar (University of Deusto, Spain)</li>
              <li>Enrique Sanz (University of Deusto, Spain)</li>
            </ul>

          <h2>Publicity/Social Media Chairs:</h2>
            <ul>
              <li>TBA</li>
            </ul>

          <h2>Steering committee:</h2>
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

        <p className="font-serif leading-loose pl-4 text-justify">
          <h2>Program Committee:</h2>
            <ul>
              <li>TBA</li>
            </ul>
        </p>

        <p>
          <Publishers />
          <Sponsors />

        </p>
      </div>
  </div>


  </Layout>
);

export default CommitteePage;