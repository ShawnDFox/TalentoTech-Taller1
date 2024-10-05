import { Button, Table } from "react-bootstrap";

function CharacterListComp(props)
{   return(
        <>
        <Table striped>
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
                    <td><Button onClick={()=>{props.SelectedChar(d.id)}}>View</Button></td>            
                </tr>         
                ))}
            </tbody>
            
        </Table>
        
        
        </>
    );
}
export default CharacterListComp;