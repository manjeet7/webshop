import React, { useEffect } from "react";
// import products from "../assets/products"
import { Col, Row } from "react-bootstrap";
import Product from "../Component/Product";
import axios from "axios";
import { useGetProductQuery } from "../slices/ProductApiSlice";

const HomePage = () => {
  const { data: data, loading, error } = useGetProductQuery();

  console.log(data);
  return (
    <>
      {loading ? (
        <h1>...loading</h1>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {data.product.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomePage;
