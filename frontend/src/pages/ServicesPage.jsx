import React, { useState, useRef } from "react";
import "../styles/ServicePage.css";
import ServiceList from "../components/services/ServiceList";
import Button from "../components/button/Button";
import headerImage from "../assets/stock/wallpaper2you_256293.jpg";
import dogsittingImage from "../assets/stock/wallpaper2you_256348.jpg";
import dogwalkerImage from "../assets/stock/dogwalkroutine.jpg";
import doggroomingImage from "../assets/stock/dog-grooming.jpg";
import dogboardingImage from "../assets/stock/wallpaper2you_256306.jpg";

const ServicesPage = () => {
  // State to track the selected service name
  const [selectedService, setSelectedService] = useState(null);
  const serviceListRef = useRef(null);

  // Function to handle button click and set the selected service name
  const handleButtonClick = (serviceName) => {
    setSelectedService(serviceName);
    if (serviceListRef.current) {
      serviceListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="ServicePageHeader">
        <h1 className="meetTeam">Our services</h1>
        <hr className="leftHr"></hr>
        <span className="leftCircle"></span>
        <h2>
          At Doggy Woogy, our suite of premier services is designed with your
          canine companion's well-being in mind. We understand that every dog is
          unique, and our offerings cater to their individual needs ensuring a
          tail-wagging experience every time.
        </h2>
        <img src={headerImage} />
      </div>
      <div className="ServicePageContainer">
        <div className="ServiceItemContainer">
          <div>
            <h1>Dog Sitting Services</h1>
            <img src={dogsittingImage} />
          </div>
          <div className="ServiceTextContainer">
            <h2>
              We make dog sitting easy. Choose the best profile or price. We
              guarantee the lowest in your area. There are many thousands of
              drop-in visits booked. And thousands pf happy dogs. Do you feel
              that your dog is happy to nap at home all day? Instead of a
              full-time pet sitter, book someone to drop by a few times a day to
              feed and check on your pets.
            </h2>
            <Button onClick={() => handleButtonClick("dog sitter")}>
              Find dog sitter
            </Button>
          </div>
        </div>
        <hr />
        <div className="ServiceItemContainer">
          <div>
            <h1>Dog Walking Services</h1>
            <img src={dogwalkerImage} />
          </div>
          <div className="ServiceTextContainer">
            <h2>
              Get the best deals from the dog walkers nearby. When nature calls,
              our dog walkers are here to answer you. Well, you can't always
              predict a crazy day at work, but you can certainly anticipate your
              dog's needs. Instead of rushing home at lunch, book a dog walker
              to give your dog a couple of minutes dog walk. Your dog walker can
              stop by as many times as you need-on whatever days you need them.
            </h2>
            <Button onClick={() => handleButtonClick("dog walker")}>
              Find dog walker
            </Button>
          </div>
        </div>
        <hr />
        <div className="ServiceItemContainer">
          <div>
            <h1>Dog Grooming Services</h1>
            <img src={doggroomingImage} />
          </div>
          <div className="ServiceTextContainer">
            <h2>
              We connect the dog parent with the nearby dog grooming. Book a
              personalized dog grooming with DoggyWoogy's groomers who love to
              keep your furkids look good-using nothing less than the best
              products the dog groomers can find in the market.
            </h2>
            <Button onClick={() => handleButtonClick("dog groomer")}>
              Find dog groomer
            </Button>
          </div>
        </div>
        <hr />
        <div className="ServiceItemContainer">
          <div>
            <h1>Dog Boarding Services</h1>
            <img src={dogboardingImage} />
          </div>
          <div className="ServiceTextContainer">
            <h2>
              We connect the dog parent with the nearby dog boarding services.
              Book a personalized home pet boarding similar to pet hotel but 24
              hours care with some home pet boarding provide home cooked food or
              pools- whether it's just for the weekend or over a few weeks.
            </h2>
            <Button onClick={() => handleButtonClick("dog boarder")}>
              Find dog boarder
            </Button>
          </div>
        </div>
      </div>

      {selectedService && (
        <ServiceList
          items={[]}
          selectedService={selectedService}
          hideSearchBar={true}
          ref={serviceListRef}
        />
      )}
    </div>
  );
};

export default ServicesPage;
