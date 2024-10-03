import logo from './logo.svg';
import './App.css';
import CharacterListComp from './Components/CharacterListComp';
import CharCardComp from './Components/CharCardComp';
import EpisodeListComp from './Components/EpisodeListComp';
import { useState,useEffect } from 'react';

function App() {
  const [CharId,SetChar] = useState(0);
  const [CharData,SetCharData] = useState([]);
  const [APIInfo,SetInfo] = useState([]);

  let setCharSelection=(id)=>{
    console.log(`Clicked ${id}`)
    SetChar(id);
    findId(id);
    
    
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
      GetData();
      console.log(`Getting api data`);
  },[]);
  
  let GetData= ()=>{
      try{
          fetch("https://rickandmortyapi.com/api/character",
              {
                  mode:"cors",
                  method:"GET",
                  headers:{
                      "Content-Type":"application/json"
                  }
              }
          ).then((res)=>{return(res.json())}
              ).then((Data)=>{
                  
                  SetInfo(Data.results)
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
      <body>
        <div className="Container">
            <CharacterListComp data={APIInfo} SelectedChar={setCharSelection}></CharacterListComp>
            {(CharId !== 0) &&(
              <CharCardComp data={CharData}></CharCardComp>          
            )
            }
            {(CharId !== 0) &&(
              <EpisodeListComp data={CharData} ></EpisodeListComp>
            )
            }
        </div>
         
        
      </body>
    </div>
  );
}

export default App;
