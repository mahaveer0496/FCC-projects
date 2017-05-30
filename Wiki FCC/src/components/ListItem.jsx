import React from 'react';

const ListItem = ({ title, description, url }) => (
  <li className="list">
    <h3 className="list__title">{title}</h3>
    <p className="list__text">{description.substr(0, 150)}...</p>
    <a className="list__link" target="_blank" rel="noopener noreferrer" href={url} >Read more</a>
  </li>
);

export default ListItem;
