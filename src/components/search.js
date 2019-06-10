import React from "react";
//import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  header: {},
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  root: {
    display: "flex",
    flexWrap: "wrap"
  }
});

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBy: ""
    };
  }

  onSearchChange = e => {
    const searchBy = e.target.value;

    this.setState({
      searchBy
    });
    this.props.searchCards(searchBy);
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <Grid container className={classes.header}>
          <TextField
            id="name"
            label="Search by Name"
            value={this.state.searchBy}
            onChange={this.onSearchChange}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </form>
    );
  }
}

// SearchInput.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(SearchInput);
