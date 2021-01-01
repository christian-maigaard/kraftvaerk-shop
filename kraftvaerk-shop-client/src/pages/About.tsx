import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export const About: React.FC = () => {
  return (
    <>
      <Jumbotron className="m-0 bg-white">
        <h1>We are a company who understands yours.</h1>
        <p>
          Technological know-how, passion and determination are a strong combination proven to
          create value for our clients and for their clients too. Read more about us here.
        </p>
      </Jumbotron>
      <Jumbotron className="m-0">
        <h1>We have always sought to do our best and that is something we are proud of.</h1>
        <p>
          Solid technological solutions create business and drive revenue. The right advice creates
          value, optimises business processes, releases resources and creates long-term client
          relationships. So of course we always do our best. We have done that since 2004, and we
          will continue to do so.
        </p>
      </Jumbotron>
      <img src="./power.jpg" className="img-fluid h-30" alt="power-lines"></img>

      <Jumbotron className="m-0 bg-white">
        <h1>Our know-how has created results since 2004. Shall we develop your business too?</h1>
        <p>
          Decision-makers in companies and organisations have chosen Kraftvaerk as their IT
          development company and business partner, because we know what to do, and what not to do.
          In our opinion, value creation is all about coherence. Coherence between data. Between
          business processes across systems. Between you and the people you serve. Between you and
          us. Between your business challenge and our IT solution. It is up to you how early or late
          you want us to join the process. Now you know that our advice is at your service.
        </p>
      </Jumbotron>
      <Jumbotron className="m-0">
        <h1>
          For some, the technological development might be frustrating and complex. But to us, it
          isn't
        </h1>
        <p>
          Kraftvaerk has developed companies and organisations via know-how and probably the best
          tool box in the industry. We are proud to be a mature development company that continues
          to develop. Together with our clients we have, time and time again, used technological
          opportunities to release business potential. Our ambition is to provide our clients with
          the best conditions for succeeding in creating value. Our advice hinges on all the things
          that will ensure this. This includes technological know-how, an understanding of business,
          passion, humanity and decency.
        </p>
      </Jumbotron>
    </>
  );
};
