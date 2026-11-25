/* ============================================================
   THE MACHINE — what the PSP plays.

   One slot: the favourite song, shown as a now-playing screen.
   `song`     marks a now-playing slot (cover, title, artist, a live
              progress bar off #bgAudio, which streams the official preview).
   `img`      the cover, shipped with the site so the canvas never goes
              cross-origin (the spill readback samples it).
   `link`     ✕ / ↗ opens the full track.
   ============================================================ */
window.LY_WORKS = [
  {
    id: 'stay',
    song: true,
    title: 'stay',
    artist: 'Nextime & We Are Not Friends',
    album: 'twenty',
    year: '2024',
    img: 'assets/song/stay.jpg',
    link: 'https://open.spotify.com/track/2lyDiaFNx1ch934LI1qWSE',
    vertical: false
  }
];
