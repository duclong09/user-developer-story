import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import PersonAvatar from "../../images/Person-Avatar1.png";
// import PersonAvatarStack from "../../images/stack.png";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

// import ListItem from "@material-ui/core/ListItem";
import "./index.scss";
// import ListItemText from "@material-ui/core/ListItemText";
// import { CenterFocusStrong } from "@material-ui/icons";

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
    width: "30%",
    maxWidth: 360,

    backgroundColor: theme.palette.background.paper,
  },
}));

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
                    <small id="emailHelp" class="form-text text-muted">
                      <i className="fas fa-exclamation"></i> How you appear to
                      other users on the Stack Overflow QvsA Network..
                    </small>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputFullname">Full name</label>
                    <input className="form-control" id="inputFullname" />
                    <small id="emailHelp" class="form-text text-muted">
                      <i className="fas fa-exclamation"></i> How you appear to
                      employers, your private Teams, and to other users when you
                      share your Developer Story.
                    </small>
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
                      placeholder="Curent Location"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputFullname">Twiter</label>
                    <label
                      className="sr-only"
                      htmlFor="inlineFormInputGroupUsername2"
                    ></label>
                    <div className="input-group mb-2 mr-sm-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fab fa-twitter"></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroupUsername2"
                        placeholder="Profile link or usemame"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputDisplay">Website</label>

                    <label
                      className="sr-only"
                      htmlFor="inlineFormInputGroupUsername2"
                    ></label>
                    <div className="input-group mb-2 mr-sm-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fas fa-cogs"></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroupUsername2"
                        placeholder="http://example.org/"
                      />
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputFullname">GitHub</label>
                    <label
                      className="sr-only"
                      htmlFor="inlineFormInputGroupUsername2"
                    ></label>
                    <div className="input-group mb-2 mr-sm-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fab fa-github"></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroupUsername2"
                        placeholder="Profile link or usemame"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <label className="block">
                    Pick the network sites you want to display
                  </label>
                  <div className="network-site">
                    <label className="item-btn">
                      <span className="favicon-wrapper">
                        <div
                          className="favicon favicon-stackexchangemeta"
                          title="Meta Stack Exchange"
                        />
                      </span>

                      <span className="site-info">
                        <span
                          className="community-name"
                          title="Meta Stack Exchange"
                        >
                          Meta Stack Exchange
                          <span className="rep">1</span>
                        </span>
                      </span>
                      <input
                        type="checkbox"
                        name="SelectedSEAccounts"
                        defaultValue="meta.stackexchange.com"
                      />
                      <div className="check" />
                    </label>
                    <label className="item-btn">
                      <span className="favicon-wrapper">
                        <div
                          className="favicon favicon-stackoverflow"
                          title="Stack Overflow"
                        />
                      </span>
                      <span className="site-info">
                        <span className="community-name" title="Stack Overflow">
                          Stack overflow
                          <span className="rep">1</span>
                        </span>
                      </span>
                      <input
                        type="checkbox"
                        name="SelectedSEAccounts"
                        defaultValue="stackoverflow.com"
                      />
                      <div className="check" />
                    </label>
                  </div>
                </div>

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
