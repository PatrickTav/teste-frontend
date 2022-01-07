import styled from "styled-components";

export const Aside = styled.div`
    width:71px;
    height:100%;
    background-color:#1A1731;
    position:relative;
    position:fixed;
    border-top:2px solid #117EFF;
    border-bottom: 2px solid #117EFF;
    
    
    
   
    aside{
        color:#fff;
        display:flex;
        height:100vh;
        
        justify-content:center;
        margin-top:20px;
        
    }
    .aside-int{
        display:flex;
        flex-direction:column;
        align-items:center;
        
        justify-content:space-around;
        gap:100px;
    }
    .aside-top{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-between;
        gap:30px;
    }
    
    .aside-client div,
    .aside-bottom div{
        margin-top:16px;
        cursor:pointer;
        
    }
    .aside-client div svg,
    .aside-bottom div svg{
        width:20px;
        height:21px;
        
    }
    .aside-client .bar{ 
        width:25px;
        height:1px;
        background-image: linear-gradient(to left, #00E1FF, #117EFF  )
    }
    


    
`
export const Header = styled.div`
    
    header{
        width:100%;
        
        display:flex;
        justify-content:space-around;
        
        height:90px;
        align-items:center;
       
        
    }

    .header-left{
        display:flex;
        flex-direction:row;
        gap:30px;
    }
    .header-right{
        display:flex;
        
    }
    header .perfil{
        width:24px;
        height:24px;
        line-height:px;
        background-color:#117EFF;
        text-align:center;
        color:#FFF;
        border-radius:50%;
        font-weight:bold;
    }
    .header-right button{
        margin-left:20px;
        width:150px;
        height:35px;
        background-color:#117EFF;
        font-weight:bold;
        border:none;
        border-radius:5px;
        color:#FFF;
        cursor:pointer;
    }
    
    .header-right input{
        width:296px;
        height:35px;
        border:1px solid #CCCFDE;
        border-radius:5px;
    }

    .header-right button:hover{
            background-image: linear-gradient(to left, #117EFF, #00E1FF);
            transition: all 0.5s ease-in;
            transition-delay: 0.05s;
          
    }

`

export const Filter = styled.div`
    
    
    color:#3E4157;
    position:relative;
    
    width:250px;
    text-align:center;
    margin-left:50px;
   



    .filter-int{
        margin-top:20px;
    }
    .filter-int span{
        margin-left:10px;
        background-color:#E4E6F1;
        border-radius:50%;
        width:22px;
        height:22px;
        text-align:center;
        margin-left:40px;

    }
    .filter-int li {
        margin-top:12px;
        display:flex;
        font-weight:500;
        justify-content:space-between;
        cursor:pointer;
    }
    
    .filter-int li:hover {
        color:#117EFF;
        
    }

    .filter-int span:hover{
        background-color:#117EFF;
        color:#FFF;
    }



`
export const Body = styled.div`
    position:relative;
    display:grid;
    grid-template-columns: 40px auto auto  ;
    background-color:#FAFBFF;
    max-width:1200px;
    grid-template-areas: 
        'aside header header'
        'aside filter rotas '
        'aside filter rotas'
    ;

    .aside{
        grid-area:aside;
    }

    .header{
        grid-area:header;
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    .filter{
        grid-area:filter;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
    }
    .rotas{
        grid-area:rotas;
        grid-column-start:3;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 5;
         
     }

`



export const Container = styled.div`
     width:100%;
     height:100vh;
     background-color:#FAFBFF;
     
`



