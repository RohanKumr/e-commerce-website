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
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter()
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
                <p onClick={ () => router.push('/') } > Home</p>
                <p onClick={ () => router.push("/men's clothing") } > Men's Fashion</p>
                <p onClick={ () => router.push("/women's clothing") } > Women's Fashion</p>
                <p onClick={ () => router.push("/electronics") } > Electronics</p>
              </div>
              <div>
                <p onClick={ () => router.push("/jewelery") } > Jewelery</p>
                <p onClick={ () => router.push("/cart") } > Cart</p>
                <p onClick={ () => router.push("/wishlist") } > Wishlist</p>
                <p onClick={ () => router.push("/terms") } > Terms</p>

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
                {/* 21, DLF Tower 10th Rd,  */ }
                DLF Cyber City {/* DLF Phase 2, Sector 24, */ }
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
              <p>arrivalsnewofficial@gmail.com</p>
            </div>
          </ContactUs>
        </MainFooter>
      </WindowContainer>
    </FooterWrapper>
  );
}
