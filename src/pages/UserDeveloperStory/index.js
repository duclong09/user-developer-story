import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import PersonAvatar from "../../images/Person-Avatar.png";
import PersonAvatarStack from "../../images/stack.png";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import StarIcon from "@material-ui/icons/Star";

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

  input: {
    display: "none",
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

// export default function InsetList() {
//   const classes = index();

export default function ImageAvatars() {
  const classes = index();

  return (
    <div className="alert alert-info container">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography component="div">
            <div className={classes.root}>
              <Avatar
                alt="Remy Sharp"
                src={PersonAvatar}
                className={classes.large}
              />
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Upload
                </Button>
              </label>
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </div>
            <div>
              <br />
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
                      placeholder=" Profile link or username"
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

                <label htmlFor="inputFullname">
                  Pick the network sites you want to display
                </label>

                <ListItem button>
                  <Avatar
                    alt="Remy Sharp"
                    src={PersonAvatarStack}
                    className={classes.small}
                  />
                  <ListItemText primary="Meta Stack Exchange 1" />
                </ListItem>
                <ListItem button>
                  <Avatar
                    alt="Remy Sharp"
                    src={PersonAvatarStack}
                    className={classes.small}
                  />
                  <ListItemText primary="Stackoverflow 1" />
                </ListItem>

                <div>
                  <br />
                  <div className="alert alert-primary">
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
                </div>
              </form>
            </div>
          </Typography>
        </Container>
      </React.Fragment>
    </div>
  );
}
