import React from 'react'
import styled from 'styled-components'

const Head = styled.header`
   /* background-color: #9bbddb;
   font-size: 0.5rem; */
`

export const Header = (props) => {


   
//   const jsxElement = <h1>I am a Jsx student</h1>
//  const welcome = <h1>Welcome to react challenge</h1>
//  const data = <h1>sep 2, 2025</h1>
//  const header = (
//     <header>
//       {jsxElement}
//       {welcome}
//       {data}
//       <h3>JavaScript library</h3>
//    </header>
//    )


    

  return (
     <>
     <Head>
         {/* <header>
           <div>
             <h1>
                {props.welcome}
                {props.title}
                {props.subtitle}
                <p>
                {props.firstName}
                {props.lastName}
                </p>
                <small>{props.date}</small>
             </h1> 
           </div>
       </header> */}
         <header>
           <div>
             <h1>
                {props.data.welcome}
                {props.data.title}
                {props.data.subtitle}
             </h1> 
           </div>
         </header>
     </Head>
      
     
     </>
  )
}

export default Header
