import { Card, CardBody, CardHeader, CardImg } from "react-bootstrap";

function CharCardComp(props)
{
    console.log(`char: ${JSON.stringify(props.data)}`);
    
    return(
        <>
        <Card>
            <CardHeader>
                <h3>{props.data.name}</h3>
            </CardHeader>
            <CardImg src={props.data.image}></CardImg>
            <CardBody className="align">                
                origin: {props.data.origin.name}<br/>
                Location: {props.data.location.name}                       
            </CardBody>
            
        </Card>
        </>
        
    );
}
export default CharCardComp;