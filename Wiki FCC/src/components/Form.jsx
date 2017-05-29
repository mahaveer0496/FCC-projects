import React from 'react';

const Form = () => {
  let searchText = null;
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchText.value);
    searchText.value = '';
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler} >
        <div className="form__search-field">
          <label className="form__hidden" htmlFor="text">Search</label>
          <input id="text" type="text" ref={(input) => { searchText = input; }} autoFocus tabIndex={1} placeholder="Search the wiki" />
          <button className="form__button" type="submit" ><i className="ion-ios-search-strong" /> </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
