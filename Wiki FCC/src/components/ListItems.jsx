import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shortid from 'shortid';

import ListItem from './ListItem';

const ListItems = ({ data }) => (
  <ul className="list_item_container">
    {data[1].length !== 0
      ? data[1].map((title, index) =>
        (<ListItem
          key={shortid.generate()}
          title={data[1][index]}
          description={data[2][index]}
          url={data[3][index]}
        />))
      : <h1 className="list__error">Oops! No results</h1>
    }
  </ul>
);

ListItems.propTypes = {
  data: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  data: state.data,
});

export default connect(mapStateToProps, null)(ListItems);
