import { Button } from "../components/Button/Button";
import { Container } from "../components/Container/Container";
import { Section } from "../components/Section/Section";
import { Link } from "react-router-dom";
import fruit from "../images/Mobil/fruit.png";

const NotFound = () => {
  return (
    <>
      <Section>
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "100px 0 100px 0",
            }}
          >
            <img src={fruit} alt="fruit" />
            <div>
              <h2 style={{ marginTop: "60px", marginBottom: "40px" }}>
                OOPS! PAGE NOT FOUND
              </h2>
              <Button>
                <Link style={{ color: "#FFFFFF" }} to="/">
                  Back Home
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default NotFound;
