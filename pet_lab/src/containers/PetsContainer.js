import PetsList from "../components/PetsList";
import PetsForm from "../components/PetForm";
import { useEffect, useState } from "react";

const PetsContainer = () => {

    const [petsList, setPetsList] = useState([]);

    const fetchPets = async () => {
        const response = await fetch("http://localhost:8080/pets");
        const jsonData = await response.json();
        setPetsList(jsonData);
    }

    useEffect(() => {
        fetchPets();
    },[]);

    const postPet = async (newPet) => {
        const response = await fetch("http://localhost:8080/pets", {
            method: "POST",
            headers: {"Content-Type": "application/json"} ,
            body: JSON.stringify(newPet)
        });
        const savedPet = await response.json();
        setPetsList([...petsList, savedPet]);
    }

    const deletePet = async (id) => {
        const response = await fetch("http://localhost:8080/pets/" + id, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"} 
        });
        const keptPets = petsList.filter((pet) => pet.id !== parseInt(id));
        setPetsList(keptPets); 
    }

    return(
        <>
            <PetsForm postPet={postPet}/>
            <h3>All Pets</h3>
            <div  id="layout">
                <PetsList pets={petsList} deletePet={deletePet}/>
            </div>
        </>
    )
}

export default PetsContainer;