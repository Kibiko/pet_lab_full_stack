import Pets from "./Pets"

const PetsList = ({pets, deletePet}) => {

    const displayPets = pets.map((pet) => {
        return <Pets
            key={pet.id}
            pet={pet}
            deletePet={deletePet}
            />
    })

    return(
        <div id="pets_list">
            {displayPets}
        </div>
    )
}

export default PetsList;