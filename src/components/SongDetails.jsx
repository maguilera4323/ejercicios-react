import React from "react";
import SongArtist from "./SongArtist";
import SongLyrics from "./SongLyrics";

export default function SongDetails({search, lyric, bio}){
    return(
        <>
            <h2>SongDetails</h2>
            <SongArtist />
            <SongLyrics />
        </>
    )
}