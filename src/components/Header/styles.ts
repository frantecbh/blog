import styled from "styled-components";

import img from "../../assets/images/bg.png";
import hero from "../../assets/images/hero.png";

export const Container = styled.div`
background-color: #290742;
/* background-image: url(${img}); */



`;

export const Conteudo = styled.div`

max-width: 1070px;
margin: auto;
color: var(--shape);





header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 45px;
    margin: 0 10px;
}



`;

export const HeroAerea = styled.div`

    display: flex; 

    margin: 0 10px;

    align-items: center;
    justify-content: space-between;

    .leftside{
        flex: 1;

    
    }
    .leftside h1{
       font-size: 42px;
       line-height: 50px;
        color: #9E6DC2;
       font-weight: bold;

      margin-bottom: 30px

     
    
    }
    .leftside p{
        font-size: 16px;
        line-height: 23px;

        color: #999;

        margin-bottom: 30px

    }

    .leftside .form{
        margin-bottom: 30px;
    }

    .leftside .form input{
      
        border: 1px solid rgba(255, 255, 255, 0.4);
        background: transparent;

        color: #fff;

        height: 40px;

        padding: 0 10px;

        outline: none;
        font-size: 14px;
       


        width: 70%;
        margin-right: 10px;
        

    }

    .leftside .form button{
        
        height: 40px;
    border: 0;
    background-color: #0071b7;
    color: #fff;
    font-size: 14px;
    padding: 0 20px;
    

    

        

}

.leftside .habilidades img {
    /* padding-top: 10px;
    margin-bottom: 30px; */

 

    margin-right: 10px;
    padding-top: 20px;
    padding-bottom: 30px;
}

    .rightside{

    /* background-image: url(${hero}); */
    flex: 1;
  

    img{
      
        width: 100%;
   
    }
   

   
    
}

`;