import React from 'react';
import PropTypes from 'prop-types';


const ListItem = ({ title, description, url }) => (
  <li className="list">
    <h3 className="list__title">{title}</h3>
    <p className="list__text">{description.substr(0, 150)}...</p>
    <a className="list__link" target="_blank" rel="noopener noreferrer" href={url} >Read more</a>
  </li>
);
ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default ListItem;
