const Pets = ({pet, deletePet}) =>{

    const handleDeleteClick = () => {
        deletePet(pet.id);
    }

    return(
        <div id="pet">
            <h4>{pet.name}</h4>
            <p>Type: {pet.type}</p>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
            <button id="delete" onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}

export default Pets;