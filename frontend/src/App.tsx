import React from "react";
import Layout from "./layouts/Layout";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <p>Home Page</p>
          </Layout>
        }
      />
      <Route
        path="/search"
        element={
          <Layout>
            <p>Search Page</p>
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
