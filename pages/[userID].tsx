import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useStateValue } from "../context/stateProvider";
import BusinessCard from "../components/businessCard/businessCard";
import { useAuth } from "../context/authUserContext";
import { auth } from "../Firebase/firebase.config";
import { Container, Row, Col, Button } from "reactstrap";
import { useRouter } from "next/router";

const BusinessCardPage = () => {
  const [{ user, existedUser }, dispatch] = useStateValue();
  const { authUser, loading, signOutAndClear } = useAuth();
  const router = useRouter();
  // console.log(user);
  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [authUser, loading]);
  // console.log(authUser);
  return (
    <>
      <Head>
        <title> | ContactQR </title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="title"
        />
      </Head>
      <Container>
        {loading ? (
          <Row>
            <Col>Loading....</Col>
          </Row>
        ) : (
          <>
            <Row>
              <Col>
                {authUser && (
                  <div>
                    <BusinessCard {...existedUser} />
                  </div>
                )}
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};
export default BusinessCardPage;
