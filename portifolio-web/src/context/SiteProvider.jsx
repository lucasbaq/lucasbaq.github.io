import React from "react";
import propTypes from 'prop-types';
import SiteContext from './SiteContext';

function SiteProvider({ children }) {
  const contextValue = {
    temp: 'temp',
  }
  return (
    <SiteContext.Provider value={ contextValue }>
      {children}
    </SiteContext.Provider>
  )
}

SiteProvider.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default SiteProvider;
