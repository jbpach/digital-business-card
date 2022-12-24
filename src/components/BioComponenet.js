import "../style.css"

export default function BioComponenet(props) {
    return (
        <>        
            <h2 className={props.hclass}>{props.heading}</h2>
            <p className={props.tclass}>{props.text}</p>
        </>
    );
}