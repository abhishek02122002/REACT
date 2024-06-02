const handleClick = () => {
     alert("India");
 };
const wrapper = React.createElement('div',{className:'wrapper',style:{height:"100vh",
                                                                      width:"100vw",
                                                                      display:"flex",
                                                                      alignItems:"center",
                                                                      justifyContent:"center",
                                                                      backgroundColor:"#fff8a9",
                                                                      gap:"19px"
}},[
          React.createElement('div',{className:'india-section',style:{
               display:'flex',
               flexDirection:'column',
               gap:2
          },key:0},[
               React.createElement('img',{src:'india.jpg',style:{
                    width:300,
                    height:300,
                    borderRadius:13,
                    
               }}),
               React.createElement('button',{id:'changeBtn',style:{
                    height:"2rem",
                    width:"3.4rem",
                    borderRadius:4,
                    margin:"0 auto"

               },  onClick: handleClick
          },'country')
          ]),
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(wrapper);

// const btn = document.querySelector('#changeBtn');
// btn.addEventListener('click',()=>{
//      alert("Hello");
// },false);


