import React from "react";
import { WindowContainer } from "../../components/commonStyles/styles";
import {
  FooterWrapper,
  MainFooter,
  CompanyInfo,
  UsefulLinks,
  ContactUs,
  SocialIcons,
  Icon,
} from "./style";
import Image from "next/image";

export default function Footer() {
  return (
    <FooterWrapper>
      <WindowContainer>
        <MainFooter>
          <CompanyInfo>
            <h1>ARRIVALS</h1>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              maiores totam quis culpa eos nostrum quasi iusto voluptates,
              quisquam eaque accusamus harum fuga eum labore blanditiis facilis
              sit quam illum.
            </div>
            <SocialIcons>
              {/* <Icon className="facebook">F</Icon>
              <Icon className="instagram">I</Icon>
              <Icon className="twitter">T</Icon>
              <Icon className="pinterest">P</Icon> */}

              <Image
                height="50"
                width="50"
                src="/images/facebook.png"
                alt="facebook"
              />
              <Image
                height="50"
                width="50"
                src="/images/instagram.png"
                alt="instagram"
              />
              <Image
                height="50"
                width="50"
                src="/images/twitter.png"
                alt="twitter"
              />
              <Image
                height="50"
                width="50"
                src="/images/pinterest.png"
                alt="pinterest"
              />
            </SocialIcons>
          </CompanyInfo>
          <UsefulLinks>
            <h2>Useful Links</h2>
            <div className="grid">
              <div>
                <p>Home</p>
                <p>Men's Fashion</p>
                <p>Women's Fashion</p>
                <p>Electronics</p>
              </div>
              <div>
                <p>Jewelery</p>
                <p>Cart</p>
                <p>Whislist</p>
                <p>Terms</p>
              </div>
            </div>
          </UsefulLinks>
          <ContactUs>
            <h2>Contact</h2>
            <div className="contact-row">
              <Image
                width="25"
                height="25"
                src="/images/map.png"
                alt="location"
              />
              <p>
                {/* 21, DLF Tower 10th Rd,  */}
                DLF Cyber City {/* DLF Phase 2, Sector 24, */}
                Gurugram, Haryana 122022
              </p>
            </div>
            <div className="contact-row">
              <Image
                width="25"
                height="25"
                src="/images/smartphone.png"
                alt="phone"
              />
              <p>+91 12345 56789</p>
            </div>

            <div className="contact-row">
              <Image
                width="25"
                height="25"
                src="/images/email.png"
                alt="phone"
              />
              <p>rkrohanrk065@gmail.com</p>
            </div>
          </ContactUs>
        </MainFooter>
      </WindowContainer>
    </FooterWrapper>
  );
}
