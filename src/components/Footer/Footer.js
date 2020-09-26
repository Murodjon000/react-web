import React from 'react'
import {
FooterContainer,
FotterSubscription,
FooterSubHeading,
FooterSubText,
Form,
FormInput,
FooterLinksContainer,
FooterLinksWrapper,
FooterLinksItem,
FooterLinkTitle,
FooterLink,
SocialIcon,
SocialIconLink,
SocialLogo,
SocialMedia,
SocialMediaWrap,
SocialIcons,
WebsiteRights
}
from './Footer.elements'
import {Button} from '../../globalStyles'
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FotterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to recive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your email"/>
                        <Button bigFont >Subscribe</Button>
                </Form>
            </FotterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLinkTitle>Сontact us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItem>
                    </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItem>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                          ULTRA
                        
                    </SocialLogo>
                    <WebsiteRights>ULTRA  2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
