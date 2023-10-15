import { Link } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import { MainTitle, Wrapper, Title, PhoneContainer } from "./Contacts.styled";

export const Contacts = () => {
  return (
    <>
      <Section>
        <Container>
          <MainTitle>Contacts</MainTitle>
          <Wrapper>
            <div>
              <Title>Call us</Title>
              <PhoneContainer>
                <li>
                  <Link to="tel:0800222222">0 (800) 22-22-22</Link>
                  <span>Free calls</span>
                </li>
                <li>
                  <Link to="tel:+380673333333">+380 (67) 333-33-33</Link>
                  <span>Kyiv</span>
                </li>
                <li>
                  <Link to="tel:+380503333333">+380 (50) 333-33-33</Link>
                  <span>Lviv</span>
                </li>
              </PhoneContainer>
            </div>
            <div>
              <Title>Write us</Title>
              <ul>
                <li>
                  <Link to="https://www.viber.com/ua/">Viber</Link>
                </li>
                <li>
                  <Link to="https://web.telegram.org/">Telegram</Link>
                </li>
                <li>
                  <Link to="mailto:sweet_paradise@mail.com">
                    sweet_paradise@mail.com
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Title>Schedule</Title>
              <ul>
                <li>
                  <p>Mon-Fr</p>
                  <p>09:00 - 20:00</p>
                </li>
                <li>
                  <p>Sat</p>
                  <p>10:00 - 16:00</p>
                </li>
                <li>
                  <p>Sun</p>
                  <p>10:00 - 16:00</p>
                </li>
              </ul>
            </div>
          </Wrapper>
          <div>
            <h3>Our address</h3>
            <p>Maidan of Independence Kyiv, 02000</p>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </Container>
      </Section>
    </>
  );
};
