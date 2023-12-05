import { useState } from 'react';

export const SearchBox = ({movies}) => {
    const [searchText, setSearchText] = useState('');

    const searchResults = () => {
        if (searchText === movies.name) {
        console.log(movies.genre);
        console.log(searchText);
        }
    }

    return(
        <form>
            <input onChange={(e) => setSearchText(e.target.value)}
            type="text"
            value={searchText}/>
        </form>
    )
}