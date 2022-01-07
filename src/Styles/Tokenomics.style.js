import styled from "styled-components";


const TokenomicsWrapper = styled.div`
display: flex;
.tokenomics-container{
    padding:40px;
    .chart{
        width:700px;
        margin-top: 50px;
    }
    .tokenomics{
        display:flex;
        flex-direction:column;
        margin-top: 50px;
        p{
            width:290px

        }
    }
    .details{
        margin-top:20px;
        .container{
            display:flex;
            align-items: center;
            margin-top: 5px;
            svg{
                width:20px;
                height:20px;
            }
            h3{
                margin-left:10px;
                font-size: 20px;
            }
        }
    }
}
`

export default TokenomicsWrapper;