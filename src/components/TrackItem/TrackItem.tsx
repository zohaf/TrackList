import React from "react";
import styles from "./TrackItem.module.css";
import IconButton from "@mui/material/IconButton";
import { FavoriteBorder, PlayCircle } from "@mui/icons-material";

type Props = {
  trackName: string;
  thumbnail: string;
};

const onLike = (name: string) => {
  alert(`${name} liked`);
};

export const TrackItem = ({ trackName, thumbnail }: Props) => {
  return (
    <div className={styles.trackContainer}>
      <img src={thumbnail} alt="thumbnail" className={styles.thumbnail} />
      <h2 className={styles.trackName}>{trackName}</h2>
      <div>
        <IconButton aria-label="delete">
          <PlayCircle />
        </IconButton>
        <IconButton aria-label="delete">
          <FavoriteBorder onClick={() => onLike(trackName)} />
        </IconButton>
      </div>
    </div>
  );
};
