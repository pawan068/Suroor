import { createContext, useContext, useEffect, useRef, useState } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const audioRef = useRef(new Audio());

  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [queue, setQueue] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);


  const playSong = (song, songs = []) => {
    if (!song) return;

    if (songs.length) {
      setQueue(songs);

      const index = songs.findIndex(
        (item) => item.id === song.id
      );

      setCurrentIndex(index);
    }

    setCurrentSong(song);

    const url =
      song?.media?.previewUrl ||
      song?.downloadUrl?.[4]?.url ||
      song?.downloadUrl?.[0]?.url;

    if (!url) {
      console.log("Audio URL not found");
      return;
    }

    audioRef.current.src = url;
    audioRef.current.play();

    setIsPlaying(true);
  };


  const togglePlay = () => {
    if (!currentSong) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying((prev) => !prev);
  };


  const seekSong = (time) => {
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };


  const playQueueSong = (song, index) => {

    setCurrentSong(song);
    setCurrentIndex(index);

    const url =
      song?.media?.previewUrl ||
      song?.downloadUrl?.[4]?.url ||
      song?.downloadUrl?.[0]?.url;


    if (!url) return;

    audioRef.current.src = url;
    audioRef.current.play();

    setIsPlaying(true);
  };


  const nextSong = () => {

    if (!queue.length) return;

    if (currentIndex >= queue.length - 1) return;


    const nextIndex = currentIndex + 1;

    playQueueSong(
      queue[nextIndex],
      nextIndex
    );
  };


  const prevSong = () => {

    if (!queue.length) return;

    if (currentIndex <= 0) return;


    const prevIndex = currentIndex - 1;

    playQueueSong(
      queue[prevIndex],
      prevIndex
    );
  };


  useEffect(() => {

    const audio = audioRef.current;


    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };


    const loaded = () => {
      setDuration(audio.duration || 0);
    };


    const ended = () => {

      if (currentIndex < queue.length - 1) {

        const nextIndex = currentIndex + 1;

        playQueueSong(
          queue[nextIndex],
          nextIndex
        );

      } else {

        setIsPlaying(false);

      }

    };


    audio.addEventListener(
      "timeupdate",
      updateTime
    );

    audio.addEventListener(
      "loadedmetadata",
      loaded
    );

    audio.addEventListener(
      "ended",
      ended
    );


    return () => {

      audio.removeEventListener(
        "timeupdate",
        updateTime
      );

      audio.removeEventListener(
        "loadedmetadata",
        loaded
      );

      audio.removeEventListener(
        "ended",
        ended
      );

    };

  }, [currentIndex, queue]);


  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        currentTime,
        duration,
        queue,
        currentIndex,
        audioRef,
        playSong,
        togglePlay,
        seekSong,
        nextSong,
        prevSong,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};


export const usePlayer = () => useContext(PlayerContext);