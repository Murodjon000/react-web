import React from 'react'
import {
    InfoSec,
    InfoColumn,
    InfoRow,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img

} from './InfoSection.element'
import {Container,Button} from '../../globalStyles'
import {Link} from 'react-router-dom'

const InfoSection = ({
    lightBg,
    imgStart,
    lightTopLine,
    lightText,
    lightTextDesc,
    buttonLabel,
    description,
    topline,
    headline,
    primary,
    img,
    start,
    alt

}) => {
    return (
        <InfoSec lightBg={lightBg}>
        <Container>
         <InfoRow imgStart={imgStart}>
            <InfoColumn>
                <TextWrapper>
                    <TopLine lightTopLine={lightTopLine}>{topline}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                    <Link to="/sign-up">
                        <Button big bigFont primary={primary}>{buttonLabel}</Button>
                    </Link>
                </TextWrapper>
            </InfoColumn>
            <InfoColumn>
                <ImgWrapper start={start}>
                    <Img src={img} alt={alt}/>
                </ImgWrapper>
            </InfoColumn>
         </InfoRow>
        </Container>
        </InfoSec>
    )
}

export default InfoSection
