import React from "react";
import styles from "./TrackList.module.css";
import { TrackItem } from "./../TrackItem/TrackItem";
import tracks from "./../../data.json";

type Props = {};

console.log(tracks);

export const TrackList = (props: Props) => {
  return (
    <div className={styles.trackListContainer}>
      {tracks.map(({ trackName, thumbnail }) => (
        <TrackItem trackName={trackName} thumbnail={thumbnail} />
      ))}
    </div>
  );
};
