import React from "react";
import "../styles/global.css";
import { dogImage, dogBoneImage, dogPawImage, brushImage, spaImage, heartPlusImage } from "../assets/symbols/common";

const Home = () => {
  return (
    <div id="section-hotel">
      <div className="large_container">
      <h2>
          WE CARE YOUR PAWS
        </h2>
        <h2>
        We are an online platform who helps to connect dog owners looking for dog 
        babysitting services and people who are willing to host and take care of the dogs
        for a short period. 
        </h2>{" "}
        <button to="/signup" className="JoinButton">Join us</button>
      </div>

      <div>
        <div className="services-container">
          <div className="container">
            {dogImage}
            <h2>Dog Babysitting</h2>
            <p></p>
            <p>
              Every day we go to long walkies in nature, visiting different dog
              parks – sometimes for hours – so that your dog gets new
              experiences and new smells, dogs can run and play! At our hotel
              your dog can enjoy activities and play with friends at dog parks.
              You can have a quiet evening or enjoy your holiday in peace!
            </p>
          </div>
          <div className="container">
          {dogPawImage}
            <h2>Dog mental therapy </h2>
            <p></p>
            <p>
              For puppies and dogs that suffer anxieties or are socially
              challenged, our hotel can be a really good place to learn new
              skills and behavior in safe environment
            </p>
          </div>
          <div className="container">
          {dogBoneImage}
            <h2>Dog Care Services </h2>
            <p></p>
            <p>
              Should you need to board your dog at our dog hotel during your
              holidays, we can do that too – our hotel is luxurious home and
              cage free. Please bear in mind that all our employees are
              professional Certified Animal Care takers so your dog is really in
              good hands 24/7.
            </p>
          </div>
          <div className="container">
          {heartPlusImage}
            <h2>Medical Care </h2>
            <p></p>
            <p>
              We provide acupuncture treatment helping with chronic pain and
              providing natural body balance for your dog.
            </p>
          </div>
          <div className="container">
          {spaImage}
            <h2>Spa & Wellness </h2>
            <p></p>
            <p>
              Our "Dog Spa" services offer exclusive massage with essential oil
              for stress relief and body balance.
            </p>
          </div>
          <div className="container">
          {brushImage}
            <h2>Salon services</h2>
            <p></p>
            <p>
              Our hotel saloon will offer your pet numerous services from
              grooming, fur styling to fur extension.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
