import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: #000;
  color: #fff;
  /* height: 250px; */
  background: hsl(0, 0%, 7%);
  margin-top: 20px;
`;

export const MainFooter = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(3, 0.5fr);
  gap: 16px;
`;

export const CompanyInfo = styled.div`
  font-size: 18px;
  > div {
  }
`;

export const UsefulLinks = styled.div`
  padding-top: 16px;
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* gap: 100px; */
    p {
      font-size: 14px;
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export const ContactUs = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  .contact-row {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    margin: 13px 0px;
  }
  p {
    padding-top: 3px;
    margin: 0;
    color: #eaeaea91;

    font-size: 14px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin: 16px 0;
`;
