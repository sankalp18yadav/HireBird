import React from "react";
import CompanySwipe from "../../global/companyswipe";
// Company images imported
import accenture from "../../../assets/Photo/accenture.jpeg";
import acer from "../../../assets/Photo/Acer.jpeg";
import adani from "../../../assets/Photo/Adani.jpeg";
import adobe from "../../../assets/Photo/Adobe.jpeg";
import airIndia from "../../../assets/Photo/Air India.jpeg";
import amazon from "../../../assets/Photo/Amazon.jpeg";
import americanExpress from "../../../assets/Photo/American Express.jpeg";
import apple from "../../../assets/Photo/Apple.jpeg";
import audi from "../../../assets/Photo/Audi.jpeg";
import blueTokai from "../../../assets/Photo/Blue Tokai.jpeg";
import bmw from "../../../assets/Photo/Bmw.jpeg";
import boat from "../../../assets/Photo/Boat.jpeg";
import brave from "../../../assets/Photo/Brave.jpeg";
import bridgestone from "../../../assets/Photo/Bridgestone.jpeg";
import citibank from "../../../assets/Photo/Citibank.jpeg";
import cocoCola from "../../../assets/Photo/Coca Cola.jpeg";
import deloitte from "../../../assets/Photo/Deloitte.jpeg";
import dji from "../../../assets/Photo/dji.jpeg";
import emirates from "../../../assets/Photo/Emirates.jpeg";
import ethiad from "../../../assets/Photo/Ethiad.jpeg";
import fedEx from "../../../assets/Photo/FedEx.jpeg";
import flipkart from "../../../assets/Photo/Flipkart.jpeg";
import google from "../../../assets/Photo/Google.jpeg";
import hdfc from "../../../assets/Photo/HDFC BANK.jpeg";
import hyatt from "../../../assets/Photo/Hyatt.jpeg";
import ibm from "../../../assets/Photo/IBM.jpeg";
import ikea from "../../../assets/Photo/IKEA.jpeg";
import indigo from "../../../assets/Photo/Indigo.jpeg";
import infosys from "../../../assets/Photo/Infosys.jpeg";
import intel from "../../../assets/Photo/intel.jpeg";
import kia from "../../../assets/Photo/Kia.jpeg";
import landRover from "../../../assets/Photo/Land Rover.jpeg";
import levis from "../../../assets/Photo/Levis.jpeg";
import louisVuitton from "../../../assets/Photo/Louis vuitton.jpeg";
import marriott from "../../../assets/Photo/Marriott.jpeg";
import meesho from "../../../assets/Photo/Meesho.jpeg";
import mercedesBenz from "../../../assets/Photo/Mercedes-Benz.jpeg";
import meta from "../../../assets/Photo/Meta.jpeg";
import microsoft from "../../../assets/Photo/Microsoft.jpeg";
import myntra from "../../../assets/Photo/Myntra.jpeg";
import nike from "../../../assets/Photo/Nike.jpeg";
import nvidia from "../../../assets/Photo/Nvidia.jpeg";
import pinterest from "../../../assets/Photo/Pinterest.jpeg";
import prada from "../../../assets/Photo/Prada.jpeg";
import puma from "../../../assets/Photo/Puma.jpeg";
import salesforce from "../../../assets/Photo/Salesforce.jpeg";
import samsung from "../../../assets/Photo/Samsung.jpeg";
import sansui from "../../../assets/Photo/sansui.png";
import singaporeAirlines from "../../../assets/Photo/Singapore Airlines.jpeg";
import sony from "../../../assets/Photo/SONY.jpeg";
import spotify from "../../../assets/Photo/Spotify.jpeg";
import starbucks from "../../../assets/Photo/Starbucks.jpeg";
import suzuki from "../../../assets/Photo/Suzuki.jpeg";
import swiggy from "../../../assets/Photo/Swiggy.jpeg";
import taj from "../../../assets/Photo/Taj.jpeg";
import tata from "../../../assets/Photo/Tata.jpeg";
import toshiba from "../../../assets/Photo/Toshiba.jpeg";
import totalEnergies from "../../../assets/Photo/TotalEnergies.jpeg";
import toyota from "../../../assets/Photo/Toyota.jpeg";
import uber from "../../../assets/Photo/Uber.jpeg";
import ups from "../../../assets/Photo/UPS.jpeg";
import vGuard from "../../../assets/Photo/V-Guard.jpeg";
import x from "../../../assets/Photo/X.jpeg";
import zomato from "../../../assets/Photo/Zomato.jpeg";

const Partner = () => {
  // Company logos --->

  const companyItems = [
    { image: accenture },
    { image: acer },
    { image: adani },
    { image: adobe },
    { image: airIndia },
    { image: amazon },
    { image: americanExpress },
    { image: apple },
    { image: audi },
    { image: blueTokai },
    { image: bmw },
    { image: boat },
    { image: brave },
    { image: bridgestone },
    { image: citibank },
    { image: cocoCola },
    { image: deloitte },
    { image: dji },
    { image: emirates },
    { image: ethiad },
    { image: fedEx },
    { image: flipkart },
    { image: google },
    { image: hdfc },
    { image: hyatt },
    { image: ibm },
    { image: ikea },
    { image: indigo },
    { image: infosys },
    { image: intel },
    { image: kia },
    { image: landRover },
    { image: levis },
    { image: louisVuitton },
    { image: marriott },
    { image: meesho },
    { image: mercedesBenz },
    { image: meta },
    { image: microsoft },
    { image: myntra },
    { image: nike },
    { image: nvidia },
    { image: pinterest },
    { image: prada },
    { image: puma },
    { image: salesforce },
    { image: samsung },
    { image: sansui },
    { image: singaporeAirlines },
    { image: sony },
    { image: spotify },
    { image: starbucks },
    { image: suzuki },
    { image: swiggy },
    { image: taj },
    { image: tata },
    { image: toshiba },
    { image: totalEnergies },
    { image: toyota },
    { image: uber },
    { image: ups },
    { image: vGuard },
    { image: x },
    { image: zomato },
  ];

  return (
    <section className="w-full py-8 md:py-12">
      <div className="container mx-auto text-center">
        <h2
          className="text-3xl md:text-5xl font-bold mb-6 text-[#393939]"
          data-aos="fade-up"
        >
          Our <span className="text-[#d30c0c] font-extrabold">Partners</span>
        </h2>

        <CompanySwipe companyItems={companyItems} />
      </div>
    </section>
  );
};

export default Partner;
