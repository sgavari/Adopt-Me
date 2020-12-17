import React, {useState, useEffect} from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet'
import useDropDown from './useDropDown'
const SearchParams = () => {
const [location, setLocation] = useState("Seattle, WA");
const [breeds, setBreeds] = useState([]);
const [animal, AnimalDropDown] = useDropDown("Animal", "dog", ANIMALS);
const [breed, BreedDropDown, setBreed] = useDropDown("Breed", "", breeds);

useEffect(() => {
setBreeds([]);
setBreed("");

pet.breeds(animal).then(({ breeds: apiBreeds })=> {
const breedStrings = apiBreeds.map(({name}) => name);
setBreeds(breedStrings);

}, console.error);
}, [animal, setBreed, setBreeds]);

return (
<div className = "search-params">
<form>
    <label htmlFor="location">
        Location
        <input id="location" value={location}
        placeholder="Location"
        onChange={e=> setLocation(e.target.value)}/>
    </label>
   
   <AnimalDropDown></AnimalDropDown>
   <BreedDropDown></BreedDropDown>
    <button>Submit</button>
</form>
</div>
);
};

export default SearchParams;