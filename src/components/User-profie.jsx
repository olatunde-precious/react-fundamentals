import styled from "styled-components"
import mypic from './pictures/pics2.png'

const Card = styled.div`
  font-size: 1.5em;
  border-radius: 20px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  width: 450px;
  color: #fff;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  text-align: center;
  padding: 20px;
  margin-left: 150px;
    

  h1{
    font-size: 1.8rem;
  }

  h2{
    font-size: 1.2rem;
  }

  p{
    font-size: 1.2rem;
  }

  .info{
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  
    strong{
        display: block;
        font-size: 1rem;
    }
    
    span{
        font-size: 1.1rem;
    }

    button{
        padding: 10px 20px;
        background: #4a90e2;
        border: none;
        border-radius: 25px;
        font-size: 1rem;
        cursor: pointer;
        transition: 0.3s;

        &:hover{
            background: #357abd;
        }
    }
`;

function UserProfile() {
    const div = (
        <div>
            <img src={mypic} alt="pic" height={100} width={100} title='user' style={{borderRadius: '100%'}}/>
          <h1>Alex Favour</h1>
          <h2>@alexfavour</h2>
          <h2>Tech lover | React & web-dev <br></br> | Always learning</h2>
          <p>
             Music | Coding | Fashion
          </p>
          <h2>Abuja, Nigeria</h2>
          
          <section className="info">
            <dir>
                <strong>124</strong>
                <span>Posts</span>
            </dir>
            <dir>
                <strong>1.2k</strong>
                <span>Followers</span>
            </dir>
            <dir>
                <strong>150</strong>
                <span>Following</span>
            </dir>

          </section>
            <button>Edit Profile</button>
        </div>
    )
    

    return (

      <Card>
      
     {div}
      </Card>  
    )
}


export default UserProfile