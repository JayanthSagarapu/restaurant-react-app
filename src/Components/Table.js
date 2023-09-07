import React from "react";
import { connect } from "react-redux";
import { settablenumber } from "../Actions";

const Table = ({ table_number, settablenumber }) => {
  const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const inActiveBtn = "btn btn-outline-primary m-2";
  const activeBtn = "btn btn-outline-primary m-2 active";
  return (
    <div>
      <center className="mt-2">
        <h3>Please select table:</h3>
        {tables.map((table, index) => (
          <div style={{ display: "inline" }} key={index}>
            <button
              className={table_number === table ? activeBtn : inActiveBtn}
              onClick={() => settablenumber(table)}
            >
              {table}
            </button>
          </div>
        ))}
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  table_number: state.tablereducer.table_number,
});

export default connect(mapStateToProps, { settablenumber })(Table);
