import styled from "styled-components";

export const ContainerPrincipal = styled.div`
    .jumbotron{
      background: url(${props => props.background}) no-repeat fixed bottom;
      color:#100303;
    }

    .card {
      opacity: 0.8;
    }

    .card:hover {
      box-shadow:0 10px 16px 0 rgba(0,0,0,0.2),
      0 6px 20px 0 rgba(0,0,0,0.19) !important;
      opacity: 1;
    }

    .text-content{
      margin: 60px 55px 80px;
    }

    .card-img{
      margin: auto;
      width: 50%;
      padding: 10px;
      
    }
    .card-title{
      text-align: center;
      margin:auto;
    }
    .card-body{
      color:#100303
    }
`;

export const ButtonVejaMais = styled.button`
  margin: auto;
  width: 50%;
  border-radius:15px;
  padding: 10px;
  color:#000000;
  background-color:#f0a500;
  outline: none !important;
  opacity: 0.8;
`;

export const HoverButtonVejaMais = styled.div`
  button:hover {
    opacity: 1;
  }
`;