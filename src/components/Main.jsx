
import mypix from './../assets/images/pic2.png'
import myvid from './../assets/video/vid3.mp4'
import myaud from './../assets/audio/Maroon 5 - Memories.mp3'
import doSomeMath from './../modules/math.js'
import { addTwo, multiply, substract, multiple } from './../modules/math.js'
import * as everything from './../modules/math.js'
import styled from 'styled-components'


const Container = styled.div`
  
 margin: 0;
 padding: 20px;
 background-color: #eeeed6;

 .list{
   list-style: none;
 }

 .btn{
   font-size: 45px;
 }
`
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #d69aae;
  background-color: #BF4F74;
  padding: 100px;
  margin: 5px 100px;
`;

export const StyledButton = styled.button`
 background-color: #4caf50;
 color: white;
 font-size: 18px;
 padding: 10px 16px;
 border: none;
 border-radius: 8px;
 cursor: pointer;
 
 &:hover {
 background-color: #254226;
}
`
function Main() {

   const style ={
     listStyle: 'none'
   } 
 let myFirstWord = <h1>hello friends</h1>
 let myName = 'favour';
 let myLastName = 'alex'
 
    const main = (
   <main style={styles.intro}>
    <p>prerequisite to get started react.js</p>
    <ul className='list'>
      <li>HTML</li>
      <li>CSS</li>
      <li>JAVASCRIPT</li>
    </ul> 
    {myFirstWord}
    <p>{myName} {myLastName}</p>
  </main>
 )
  return(
    <Container>
    <img src={mypix} alt="pix" height={350} width={350} title='screenshot' style={{borderRadius: '100%'}}/>
     <p><video src={myvid} alt= "vid" controls type='video/mp4'></video></p>
     <p><video src="assets/video/vid3" controls></video></p>
     <audio src={myaud} alt= "aud" controls autoPlay></audio>
     {main}
     <div style={styles.intro}>
       hello, its been a while can we meet up dis weekend
        </div>
        <p>2 + 2 = {doSomeMath.addTwo(2,2)}</p>
        <h3>my name are alex favour</h3>
        <h4>my works</h4>
        <div style={style}>
            <ul className='list'>
             <li>HTML</li>
             <li>CSS</li>
             <li>ANGUAR</li>
             <li>node.js</li>
             <li>javaScript</li>
            </ul>
            <div>
        <h1>Hello Styled Component</h1>
        <StyledButton className='btn'>Click Me</StyledButton> 
         <Title>hello precious</Title>
       </div>
     </div>
    </Container>
 )
}

const styles = {
  intro: {
    fontSize: 30,
    color: 'green'
  },
  footer:{
    background: 'black',
    color: 'white',
    textAlign: 'center',
    fontSize: 30

  }
}



export default Main