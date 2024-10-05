import logo from './logo.svg';
import './App.css';
import CharacterListComp from './Components/CharacterListComp';
import CharCardComp from './Components/CharCardComp';
import EpisodeListComp from './Components/EpisodeListComp';
import { useState,useEffect } from 'react';
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';

function App() {
  const [CharId,SetChar] = useState(0);
  const [CharData,SetCharData] = useState([]);
  const [APIInfo,SetInfo] = useState([]);
  const [PageInfo,setPage] = useState("https://rickandmortyapi.com/api/character");
  let setCharSelection=(id)=>{
    console.log(`Clicked ${id}`)
    SetChar(id);
    findId(id);
    
    
  }
  let loadData=()=>{
    console.log(`Loading data from url ${PageInfo}`);
    GetData(PageInfo);
  }
 let NextPage=()=>{
  let next = PageInfo.next;
  setPage(next)
  console.log(`Next page is ${JSON.stringify(next)}`);
  GetData(next);
 }
 let prevPage=()=>{
  let prev = PageInfo.prev;
  setPage(prev)
  console.log(`prev page is ${prev}`);
  GetData(prev);
 }
  let findId =(id)=>{
    console.log(`Looking for id ${id}`)
    APIInfo.forEach((d) => {
        if(d.id==id)
        {
          SetCharData(d);
          console.log(`Found id ${id}`)
        }
    });
  }

  
  useEffect(()=>{
      loadData();
      console.log(`Getting api data`);
  },[]);
  
  let GetData = (Page)=>{
    console.log(`Trying to load ${Page}`);
      try{
          fetch(Page,
              {
                  mode:"cors",
                  method:"GET",
                  headers:{
                      "Content-Type":"application/json"
                  }
              }
          ).then((res)=>{return(res.json())}
              ).then((Data)=>{
                  setPage(Data.info);
                  SetInfo(Data.results);
                  console.log(`Data Obtained is: ${JSON.stringify(APIInfo)}`);
              }
                  ).catch((Error)=>{console.log(`Error ${Error}`)});
      }catch(Error)
      {
          console.log(`Error found!!: ${Error}`);
      }
  }

  return (
    <div className="App">    
      <Container>
        <Row>
          <Col>            
            <CharacterListComp data={APIInfo} SelectedChar={setCharSelection}></CharacterListComp>
            <ButtonGroup>
              {(PageInfo.prev !== null) &&
                (<Button onClick={()=>{prevPage()}}>Previous Page</Button>)
              }
              {(PageInfo.next !== null) &&
                (<Button onClick={()=>{NextPage();console.log(`informacion de la pagina: ${JSON.stringify(PageInfo)}`)}}>Next Page</Button>)
              }
              </ButtonGroup>
            </Col>
            <Col>
              {(CharId !== 0) &&(
                <CharCardComp data={CharData}></CharCardComp>          
              )          
            
              }
            </Col>
            <Col>
              {(CharId !== 0) &&(
                <EpisodeListComp data={CharData} ></EpisodeListComp>
              )
              }
          </Col>
        </Row>
      </Container>
        <div className="Container">
            
        </div>     
        
      
    </div>
  );
}

export default App;
