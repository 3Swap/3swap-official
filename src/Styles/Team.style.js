import styled from "styled-components";
import { PrimaryColor } from "../Assets/Utility";



const TeamWrapper = styled.div`
display:flex;
flex-direction: column;
align-items: center;
padding: 50px;
.team-wrapper{
    display: flex;
    align-items: center;
    margin-top: 40px;
    .team-container{
        display:flex;
        flex-direction: column;
        margin-left: 40px;
        align-items: center;
        h1{
            font-size: 18px;
        }
        h3{
            color:${PrimaryColor}
        }
    .avatar{
        width: 180px;
        height: 180px;
        border-radius: 50%;
        overflow: hidden;
        img{
            width:100%;
        }
    }
}
}
`;


export default TeamWrapper;