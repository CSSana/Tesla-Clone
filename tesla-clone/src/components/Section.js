import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section({ title, description, LeftBtnText, RightBtnText, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                </ItemText>
            </Fade>
            <Buttons>
                <ButtonGroup>
                    <Fade left>
                        <LeftBUtton>
                            { LeftBtnText }
                        </LeftBUtton>
                    </Fade>
                    <Fade right>
                        {RightBtnText && 
                            <RightButton>
                                { RightBtnText }
                            </RightButton>
                        }
                    </Fade>
                </ButtonGroup>
                <DownArrow src='/Tesla Images/down-arrow.svg' />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/Tesla Images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftBUtton = styled.div`
   background-color: rgba(23, 26, 32, 0.8);
   height: 40px;
   width: 256px;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 100px;
   opacity: 0.85;
   font-size: 13px;
   cursor: pointer;
   margin: 11px;
   font-weight: bold;
`

const RightButton = styled(LeftBUtton)`
    background-color: white;
    color: black;
    opacity: 0.85;
    font-weight: bold;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`

const Buttons = styled.div`

`