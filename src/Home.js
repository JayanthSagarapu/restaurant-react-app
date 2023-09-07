import React from "react";
import Header from "./Components/Header";
import Table from "./Components/Table";
import Filter from "./Components/Filter";
import Card from "./Components/Card";

const Home = () => {
  return (
    <div>
      <Header />
      <Table />
      <Filter />
      <Card />
    </div>
  );
};

export default Home;
