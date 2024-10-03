function CharCardComp(props)
{
    console.log(`char: ${JSON.stringify(props.data)}`);
    
    return(
        <>
        <div class="Card"> 
            <div id="Name"><h3>{props.data.name}</h3></div>
            <div id="Photo"><img src={props.data.image}></img></div>
            <div id="Data">
                origin: {props.data.origin.name}<br/>
                Location: {props.data.location.name} 
            </div>
        </div>
        </>
    );
}
export default CharCardComp;