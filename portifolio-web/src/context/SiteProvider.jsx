import React, { useState } from "react";
import propTypes from 'prop-types';
import SiteContext from './SiteContext';

function SiteProvider({ children }) {
  const [currProject, setCurrProject] = useState('');

  const contextValue = {
    currProject,
    setCurrProject,
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
