import { useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useStateValue } from "../context/stateProvider";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const router = useRouter();
  //Optional error handling
  const [error, setError] = useState(null);
  const onSubmit = (event) => {
    setError(null);
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    if (passwordOne === passwordTwo)
      createUserWithEmailAndPassword(auth, email, passwordOne)
        .then((authUser) => {
          console.log(authUser.user.providerData[0]);

          console.log("Success. The user is signed in ");
          dispatch({
            type: actionType.SET_USER,
            user: authUser.user.providerData[0],
          });
          localStorage.setItem(
            "user",
            JSON.stringify(authUser.user.providerData[0])
          );
          router.push(`/${authUser.user.uid}`);
          // data.id = `${authUser.user.uid}`;
          // data.imageAsset = imageAsset;
          // console.log(data);
          //   await saveDetails(data);
          //   await fetchExistedUser(data.id);
          //   router.push(`/${data.id}`);
        })
        .catch((error) => {
          // An error occurred. Set error message to be displayed to user
          setError(error.message);
        });
    else setError("Password do not match");
    event.preventDefault();
  };

  // try {

  //   localStorage.setItem(
  //     "user",
  //     JSON.stringify(userCredential.user.providerData[0])
  //   );
  //   data.id = `${userCredential.user.uid}`;
  //   data.imageAsset = imageAsset;
  //   console.log(data);
  //   await saveDetails(data);
  //   await fetchExistedUser(data.id);
  //   router.push(`/${data.id}`);
  //   console.log("sign up is done");
  // } catch (error) {
  //   showLoginError(error);
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // }

  return (
    <Container className="text-center" style={{ padding: "40px 0px" }}>
      <Row>
        <Col>
          <Form
            style={{ maxWidth: "400px", margin: "auto" }}
            onSubmit={onSubmit}
          >
            {error && <Alert color="danger">{error}</Alert>}
            <FormGroup row>
              <Label for="signUpEmail" sm={4}>
                Email
              </Label>
              <Col sm={8}>
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  id="signUpEmail"
                  placeholder="Email"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpPassword" sm={4}>
                Password
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="passwordOne"
                  value={passwordOne}
                  onChange={(event) => setPasswordOne(event.target.value)}
                  id="signUpPassword"
                  placeholder="Password"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpPassword2" sm={4}>
                Confirm Password
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  value={passwordTwo}
                  onChange={(event) => setPasswordTwo(event.target.value)}
                  id="signUpPassword2"
                  placeholder="Password"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Button>Sign Up</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
