function TeamMember(props) {
    return <>
    <img src={props.photo} width="100px"/>
    <h2>{props.nom}</h2>
    <p>{props.metier}</p>
    </>
}
export default TeamMember