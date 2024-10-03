function EpisodeListComp(props)
{
    console.log(props.data.episode)
    return(<>
    <div>      
        <ol>
            {props.data.episode.map((d,i)=>(
                <li key={i}><a href={d}>{d}</a></li>
            ))}
        </ol>    
    </div>
    </>);
}
export default EpisodeListComp;