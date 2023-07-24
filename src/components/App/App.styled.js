import styled from 'styled-components'
import { Section } from "components/Section/Section";

const MainContainer = styled.div`
width: 400px;
padding: 32px;
margin-top: 30px;
margin-left: auto;
margin-right: auto;
text-align: center;

border-radius: 20px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
background-color: white;
`
const StyledSection = styled(Section)`
margin-bottom: 45px;
padding: 15px;
border: 2px solid black;
border-radius: 15px;
`

export { MainContainer, StyledSection }