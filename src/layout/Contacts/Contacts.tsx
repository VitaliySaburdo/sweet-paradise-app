import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import icons from "../../images/sprite.svg";
import {
  MainTitle,
  Wrapper,
  Title,
  PhoneContainer,
  AddressContainer,
  ScheduleContainer,
  City,
  IconContainer,
  StyledLink,
  Text,
} from "./Contacts.styled";

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
                  <StyledLink to="tel:0800222222">
                    {" "}
                    <span>
                      {" "}
                      <IconContainer width={17} height={17}>
                        <use href={icons + "#icon-phone"}></use>
                      </IconContainer>
                    </span>
                    0 (800) 22-22-22
                  </StyledLink>
                  <City>Free calls</City>
                </li>
                <li>
                  <StyledLink to="tel:+380673333333">
                    {" "}
                    <span>
                      {" "}
                      <IconContainer width={17} height={17}>
                        <use href={icons + "#icon-phone"}></use>
                      </IconContainer>
                    </span>
                    +380 (67) 333-33-33
                  </StyledLink>
                  <City>Kyiv</City>
                </li>
                <li>
                  <StyledLink to="tel:+380503333333">
                    <span>
                      {" "}
                      <IconContainer width={17} height={17}>
                        <use href={icons + "#icon-phone"}></use>
                      </IconContainer>
                    </span>
                    +380 (50) 333-33-33
                  </StyledLink>
                  <City>Lviv</City>
                </li>
              </PhoneContainer>
            </div>
            <div>
              <Title>Write us</Title>
              <ul>
                <li>
                  <StyledLink to="https://www.viber.com/ua/">
                    {" "}
                    <IconContainer width={17} height={17}>
                      <use href={icons + "#icon-viber"}></use>
                    </IconContainer>
                    Viber
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to="https://web.telegram.org/">                      <IconContainer width={17} height={17}>
                        <use href={icons + "#icon-telegram"}></use>
                      </IconContainer>
                    Telegram
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to="mailto:sweet_paradise@mail.com">                      <IconContainer width={17} height={17}>
                        <use href={icons + "#icon-mail"}></use>
                      </IconContainer>
                    sweet_paradise@mail.com
                  </StyledLink>
                </li>
              </ul>
            </div>
            <div>
              <Title>Schedule</Title>
              <ScheduleContainer>
                <Text>Mon-Fr</Text>
                <Text>09:00 - 20:00</Text>
              </ScheduleContainer>
              <ScheduleContainer>
                <Text>Sat</Text>
                <Text>10:00 - 16:00</Text>
              </ScheduleContainer>
              <ScheduleContainer>
                <Text>Sun</Text>
                <Text>10:00 - 16:00</Text>
              </ScheduleContainer>
            </div>
          </Wrapper>
          <AddressContainer>
            <Title>Our address</Title>
            <p>Maidan of Independence Kyiv, 02000</p>
          </AddressContainer>
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
