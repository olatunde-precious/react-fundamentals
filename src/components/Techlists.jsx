import styled from "styled-components"

const Tech = styled.ul`
    background-color: #ca9f9f;
    width: 200px;
    margin-left: 100px;
    border-radius: 20px;
    padding: 20px;
    
    li{
        list-style: none;
    }
`

function Techlist() {
    const techs = (
       
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>ANGULAR</li>
                <li>PYTHON</li>
                <li>REACT</li>
            </ul>
       
    )
    return(
        <>
       <Tech>
        {techs}
       </Tech>
        </>

    )
}


export default Techlist