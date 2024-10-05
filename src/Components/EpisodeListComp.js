function EpisodeListComp(props)
{
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