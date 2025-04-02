
const Player = ({playerObj}) => {
    console.log(playerObj.image)
    return (
        <>
            <td>{playerObj.name}</td>
            <td>{playerObj.position}</td>
            <td><img src={playerObj.image} width="24px" alt="a cool image" loading="lazy" /></td>
         {/*   <td>{playerObj.skill}</td> */}
        </>
    );
}

export default Player;