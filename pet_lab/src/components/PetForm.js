import { useState } from "react";

const PetsForm = ({postPet}) => {

    const [statePet, setStatePet] = useState({
        name: "",
        type: "",
        breed: "",
        age: null
    })

    const handleChange = (e) => {
        let clonedPet = {...statePet};
        let propertyName = e.target.name;

        clonedPet[propertyName] = e.target.value;
        setStatePet(clonedPet);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        postPet(statePet);
        setStatePet({
            name: "",
            type: "",
            breed: "",
            age: 0
        })
    }

    return(
        <>
             <h3>Add new pet:</h3>
                <form id="form_submit" onSubmit={handleFormSubmit}>
                    <div id="pet_form">
                        <div>
                            <label htmlFor="pet_name">Pet Name: </label>
                            <input
                                id="pet_name"
                                name="name"
                                type="text"
                                placeholder="Enter pet name..."
                                onChange={handleChange}
                                value={statePet.name}    
                                />
                        </div>
                        <div>
                            <label htmlFor="pet_type">Pet Type: </label>
                            <input
                                id="pet_type"
                                name="type"
                                type="text"
                                placeholder="Enter pet type..."
                                onChange={handleChange}
                                value={statePet.type}    
                                />
                        </div>
                        <div>
                            <label htmlFor="pet_breed">Pet Breed: </label>
                            <input
                                id="pet_breed"
                                name="breed"
                                type="text"
                                placeholder="Enter pet breed..."
                                onChange={handleChange}
                                value={statePet.breed}    
                                />
                        </div>
                            <div>
                            <label htmlFor="pet_age">Pet Age: </label>
                            <input
                                id="pet_age"
                                name="age"
                                type="number"
                                placeholder="Enter pet age..."
                                onChange={handleChange}
                                value={statePet.age}    
                                />
                        </div>
                    </div>
                    <input type="submit" id="submit" value="Add Pet"/>
                </form>
        </>
    )
}

export default PetsForm;