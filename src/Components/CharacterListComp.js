function CharacterListComp(props)
{   return(
        <>
        <table>
            <thead>
                <tr>
                <th>Name</th>                
                <th>Species</th>
                <th>Status</th>
                <th>Options</th>
                </tr>
            </thead>
            
            <tbody >   
            {props.data.map((d,i)=>(
                <tr key={i}>
                    <td>{d.name}</td>
                    <td>{d.species}</td>
                    <td>{d.status}</td>
                    <td><button type='button' onClick={()=>{props.SelectedChar(d.id)}}>View</button></td>            
                </tr>         
                ))}
            </tbody>
            
        </table>
        
        
        </>
    );
}
export default CharacterListComp;