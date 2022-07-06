import React from "react";
import styles from "./TrackList.module.css";
import { TrackItem } from "./../TrackItem/TrackItem";

type Props = {};

export const TrackList = (props: Props) => {
  return (
    <div className={styles.trackListContainer}>
      <TrackItem />
      <TrackItem />
      <TrackItem />
      <TrackItem />
      <TrackItem />
      <TrackItem />
    </div>
  );
};
