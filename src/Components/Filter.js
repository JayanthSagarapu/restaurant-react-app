import React from "react";
import { connect } from "react-redux";
import { setfilter, resetfilter } from "../Actions";

const Filter = ({ filter_name, setfilter, resetfilter }) => {
  const items = [
    "All Items",
    "Rice Items",
    "Cold Drinks",
    "Pizza",
    "Hot Drinks",
  ];
  return (
    <div>
      <center className="mt-3">
        <span className="h4">Filter: </span>
        <select
          className="m-1"
          name="filter"
          onChange={(e) => setfilter(e.target.value)}
        >
          {items.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        {/* <button
          className="btn btn-sm btn-primary"
          onClick={() => setfilter(filter_name)}
        >
          Submit
        </button> */}
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter_name: state.filterreducer.filter_name,
});

export default connect(mapStateToProps, { setfilter })(Filter);
