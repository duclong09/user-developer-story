import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import PersonAvatar from "../../images/Person-Avatar.png";
const index = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },

  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ImageAvatars() {
  const classes = index();

  return (
    <div className={classes.root}>
      <Avatar
        alt="Remy Sharp"
        src={PersonAvatar}
        className={classes.large}
      />

      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputDisplay">Display name</label>
            <input className="form-control" id="inputDisplay" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputFullname">Full name</label>
            <input className="form-control" id="inputFullname" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputTitle">Title</label>
          <input
            type="text"
            className="form-control"
            id="inputTitle"
            placeholder="What? you current position?"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputDisplay">Where you live</label>
            <input
              className="form-control"
              id="inputDisplay"
              placeholder="curent location"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputFullname">Twiter</label>
            <input
              className="form-control"
              id="inputFullname"
              placeholder="Profile link or username"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputDisplay">Website</label>
            <input
              className="form-control"
              id="inputDisplay"
              placeholder="http://example.org/"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputFullname">GitHub</label>
            <input
              className="form-control"
              id="inputFullname"
              placeholder="Profile link or username"
            />
          </div>
        </div>

        <div className="input-group flex-nowrap">
          <div className="input-group-prepend">
            <span className="input-group-text" id="addon-wrapping">
              @
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Stackoverflow"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div>
          {/* <button type="submit" className="btn btn-primary">Save</button>
        <button type="submit" className="">Cancel</button> */}

          <ButtonGroup
            orientation="vertical"
            color="primary"
            aria-label="vertical contained primary button group"
            variant="contained"
          >
            <Button>Save</Button>
          </ButtonGroup>
          <ButtonGroup
            orientation="vertical"
            color="primary"
            aria-label="vertical contained primary button group"
            variant="text"
          >
            <Button>Cancel</Button>
          </ButtonGroup>
        </div>
      </form>
    </div>
  );
}
