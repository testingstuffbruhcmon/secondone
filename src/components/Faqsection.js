import React,{useRef,useEffect} from 'react';
import styled from 'styled-components';
const Facseqtion = () =>{
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    useEffect(()=>{
        let refarray = [ref1,ref2,ref3];
        refarray.forEach((ref)=>{
            ref.current.style.height = '0px';
        })
    },
    //eslint-disable-next-line;
    [])


    const toggleAnswer = (e,ref)=>{
        e.preventDefault();
        let height = ref.current.style.height;
        console.log(height);
        height === '0px' ? ref.current.style.height='8rem' : ref.current.style.height='0px';
        
    }

    return (
        <StyledFaq className='faq'>
                <h2>Any Questions?</h2>
                <span>FAQ</span>

                <StyledList>
                    <StyledQuestion className="question">
                        <h3 onClick={(e)=>{toggleAnswer(e,ref1)}}>How can I get started?</h3>
                        <div className="answer" ref={ref1}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque mollitia velit, minima aspernatur sunt eum.
                        </div>
                      
                    </StyledQuestion>
                    <Line></Line>
                    <StyledQuestion className="question">
                        <h3 onClick={(e)=>{toggleAnswer(e,ref2)}}>Daily Schedule</h3>
                        <div className="answer" ref={ref2}>
                            Lorem ipsum dolor sit, amet consectetur adip</div>
                            
                    </StyledQuestion>
                    <Line></Line>
                    <StyledQuestion className="question">
                        <h3 onClick={(e)=>{toggleAnswer(e,ref3)}}>Different Payment Methods</h3>
                        <div className="answer" ref={ref3}>
                             Atque mollitia velit, minima aspernatur sunt eum.
                        </div>
                       
                    </StyledQuestion>
                    <Line></Line>
                </StyledList>
        </StyledFaq>
    );
}


const StyledQuestion = styled.div`

margin-bottom:0;
overflow:hidden;

         div{
            height:0px;
            transition:0.2s ease;
            padding-top:2rem;
            font-size:2rem;
            color:gray;

        }
    
`;

const StyledList = styled.div`
    margin:0 auto;
    font-size:3.5rem;
    color:#fff;
    h3{
        cursor:pointer;
        letter-spacing:1.2px;

    }

`;


const StyledFaq = styled.div`
    padding:15rem;
    background-color: rgb(27,27,27);

    h2{
        font-size:5rem;
        color:white;
        font-weight:lighter;

    }
    span{
        display:inline-block;
        margin: 1rem 0 5rem;
        font-size:4rem;
        color:#23D997;
    }

`;
const Line = styled.div`
    width:100%;
    background-color: #fff;
    padding: 0.2rem;
    margin-bottom:5rem;
    margin-top:1rem; 
`;

export default Facseqtion;
