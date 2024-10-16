import { useEffect, useRef } from "react";

function EpisodeListComp(props)
{

    //===========???????????? NOT FUNCTIONAL!!! ??????????????==================
    /*
        create a cycle that reads the episode api by id
        store the results in an array
    */
        const EpisodeData = useRef([]);
        useEffect(()=>{
            //console.log(`Loaded list component`);
            FillData();
            console.log(`data obtenida de spisode data ${JSON.stringify(EpisodeData)}`);
        },[]);
        let FillData = ()=>{
                
                for( let e of props.data.episode ){
                    console.log(`Iterating over ${e}`);
                           GetData(e);                        
                    };    
                    
                    console.log(`data obtenida del episodio ${JSON.stringify(EpisodeData)}`);
            };
        
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
                ).then(
                    (res)=>{
                        return(res.json()
                    )}).then(
                        (Data)=>{                                        
                            EpisodeData.current.push({id:Data.episode,name:Data.name,date:Data.air_date});
                            console.log(`Adding ${{id:Data.episode,name:Data.name,date:Data.air_date}} to data`);                            
                            
                            //return(Data);
                            
                        }).catch(
                            (Error)=>{console.log(`Error ${Error}`)}
                        );
            }catch(Error)
            {
                console.log(`Error found!!: ${Error}`);
            }
        } 
        console.log(props.data.episode)
    return(<>
    <div>      
        <ol className="list-group list-group-flush">
            {props.data.episode.map((d,i)=>(
                <li key={i} className="list-group-item"><a href={d}>{d}</a></li>
            ))}
        </ol>    
    </div>
    </>);
}
export default EpisodeListComp;