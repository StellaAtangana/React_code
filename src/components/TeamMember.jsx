function TeamMember(props) {
    return <>
    <h2>{props.nom}</h2>
    <p>{props.metier}</p>
    <img src={props.photo} />
    </>
}
export default TeamMember