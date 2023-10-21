function Anime() {
    const goodAnime = ["Spy x Family", "My Hero Academia", "One Punch Man", "Cowboy Bebop", "Barakamon", "Saint Young Men", "Laid Back Camp"];
    const goodAnimeList = goodAnime.map(anime => <li key={anime}>{anime}</li>);

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