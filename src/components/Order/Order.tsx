import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Section } from "../Section/Section";

export const Order = () => {
  return (
    <>
      <Section>
        <Container>
          <h2>Time to place your order :)</h2>
          <div>
            <p>Sweet Paradise</p>
            <div>
              <form action="">
                <h3>Ready to order?</h3>
                <p>
                  Enter your details and we will We'll definitely call you back
                </p>
                <input type="text" />
                <input type="text" />
                <Button type="submit">Send</Button>
              </form>
              <p>
                By clicking on the button, you consent to processing Your
                personal data
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};
