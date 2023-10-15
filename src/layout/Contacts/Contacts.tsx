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
            <Title>Our address</Title>
            <p>Maidan of Independence Kyiv, 02000</p>
          </div>
          <div>
            <div></div>
            <div>
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317.5632572258487!2d30.523549653589736!3d50.45030047805847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50ffa1b91f%3A0x42d5962fe7e791c!2z0JzQsNC50LTQsNC9INCd0LXQt9Cw0LvQtdC20L3QvtGB0YLQuA!5e0!3m2!1sru!2sua!4v1697385917570!5m2!1sru!2sua"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};
