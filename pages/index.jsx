import { useState } from 'react';

function Header( { title } ) {
    return (<h1>{ title ? title : 'Develop. Preview. Ship. 🚀' }</h1>);
}

export default function HomePage() {
    const [likes, setLikes] = useState(0);
    const languages = ['JavaScript', 'Python', 'Java'];

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div>
            <Header title="React 💚" />
            <ul>
                {  languages.map((language)=>(
                    <li key={language}>{language}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}
