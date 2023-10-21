import { v4 as uuid } from 'uuid';

function Anime() {
    const goodAnime = [
        {name: "Spy x Family", id: uuid()},
        {name: "My Hero Academia", id: uuid()},
        {name: "One Punch Man", id: uuid()}
    ];
    const goodAnimeList = goodAnime.map(anime => <li key={anime.id}>{anime.name}</li>);

    return (
        <>
        <h3>Anime I enjoy:</h3>
        <ul>
            {goodAnimeList}
        </ul>
        </>
    )
}

export default Anime