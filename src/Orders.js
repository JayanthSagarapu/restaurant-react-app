import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Orders = ({ list }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <a
          className="navbar-brand h1 text-white"
          style={{ marginLeft: "31rem", fontSize: "25px" }}
        >
          Restaurant
        </a>
        <button className="btn btn-primary">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
          {/* <span className="badge bg-danger">{list.length}</span> */}
        </button>
      </nav>
      <center>
        <h3>Orders</h3>
        {list.length > 0 ? (
          <div className="container mt-3">
            <div className="row">
              {list.map((item) => (
                <div
                  className="col-md-4"
                  style={{ padding: "5px" }}
                  key={item.id}
                >
                  <div
                    className="card"
                    style={{ width: "20rem", padding: "3px" }}
                  >
                    <img src={item.url} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <div className="card-text">
                        Billing Amount : Rs. {item.prize}
                      </div>
                      <p>Table Number : {item.table_number}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="h5">No Order placed yet...</div>
        )}
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.orderreducer,
});

export default connect(mapStateToProps)(Orders);
