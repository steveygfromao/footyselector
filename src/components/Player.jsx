
const Player = ({playerObj}) => {
    return (
        <>
            <td>{playerObj.name}</td>
            <td>{playerObj.position}</td>
            <td>{playerObj.skill}</td>
        </>
    );
}

export default Player;