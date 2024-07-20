import ReactGA from "react-ga4";

   const MEASUREMENT_ID = "G-T9X28VPQS2"; // Replace with your actual GA4 Measurement ID

   export const initGA = () => {
     ReactGA.initialize(MEASUREMENT_ID);
     console.log("Google Analytics initialized");
   };

   export const logPageView = (path) => {
     ReactGA.send({ hitType: "pageview", page: path });
     console.log(`Logged pageview for: ${path}`);
   };

   export const logEvent = (category, action, label) => {
     ReactGA.event({
       category,
       action,
       label
     });
     console.log(`Logged event - Category: ${category}, Action: ${action}, Label: ${label}`);
   };