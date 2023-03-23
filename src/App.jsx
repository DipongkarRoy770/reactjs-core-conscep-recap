import { useEffect, useState } from 'react'
import './App.css'



function App() {
  return (
    <div className="App">
      <ReactProject name="Nillphamri" area="jaldjaka"></ReactProject>
      <ReactProject name="Dipongkar" area="Anupoma Debbi"></ReactProject>
      <Post></Post>
    </div>
  )
}
function ReactProject(props){
  const [power,setPower] =useState(1)
  const BootsPower= ()=>{
   const newPower = power *2 
   setPower(newPower)
  }
  return(
    <div className='header'>
      <h4>District:{props.name}</h4>
      <h5>Wellcome To React JS:{props.area} </h5>
      <h3>Power:{power}</h3>
      <button onClick={BootsPower}>Boost Power button</button>
    </div>
  )
}

function Post(){
  const [posts,setPost]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res => res.json())
     .then(data =>setPost(data))
  },[])
  return(
    <div>
      <p>API loadData:{posts.length}</p>
      {
       posts.map(post=><PostLoad
        title={post.title}
        body={post.body}
       ></PostLoad>)
      }
    </div>
  )
}
function PostLoad(props){
  return(
    <div className='pragraph'>
        <h4>title :{props.title}</h4>
        <p>body:{props.body}</p>
    </div>
  )
}


export default App
