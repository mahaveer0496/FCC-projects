import React from 'react';
import shortid from 'shortid';
import ListItem from './ListItem';

const ListItems = ({ data }) => (
  <ul className="list_item_container">
    {data[1].length === 0
    ? <h1 className="list__error">Oops! No Results, <br /> Try something else.</h1>
    : data[1].map((val, index) =>
      (<ListItem
        key={shortid.generate()}
        title={data[1][index]}
        description={data[2][index]}
        url={data[3][index]}
      />)
    )}
  </ul>
);

export default ListItems;
