import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-EMV738D2XL");
};

export const logPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
