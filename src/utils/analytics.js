import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-DZYBDDX9NL');
};

export const trackPageView = (path) => {
  ReactGA.send({ 
    hitType: 'pageview', 
    page: path 
  });
};

export const trackEvent = (category, action, label = null, value = null) => {
  ReactGA.event({
    category,
    action,
    label,
    value
  });
};

export const trackTiming = (category, variable, value, label = null) => {
  ReactGA.timing({
    category,
    variable,
    value,
    label
  });
};
export const trackException = (description, fatal = false) => {
  ReactGA.exception({
    description,
    fatal
  });
};
export const setUserId = (userId) => {
  ReactGA.set({ userId });
};
export const setCustomDimension = (dimensionIndex, value) => {
  ReactGA.set({ [`dimension${dimensionIndex}`]: value });
};

export const setCustomMetric = (metricIndex, value) => {
  ReactGA.set({ [`metric${metricIndex}`]: value });
}; 