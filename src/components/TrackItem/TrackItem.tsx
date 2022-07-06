import React from "react";
import styles from "./TrackItem.module.css";
import green from "../../images/green.png";
import IconButton from "@mui/material/IconButton";
import { FavoriteBorder, PlayCircle } from "@mui/icons-material";

type Props = {};

export const TrackItem = (props: Props) => {
  return (
    <div className={styles.trackContainer}>
      <img src={green} alt="thumbnail" className={styles.thumbnail} />
      <h2>Song Name</h2>
      <div>
        <IconButton aria-label="delete">
          <PlayCircle />
        </IconButton>
        <IconButton aria-label="delete">
          <FavoriteBorder />
        </IconButton>
      </div>
    </div>
  );
};
