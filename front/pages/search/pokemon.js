import React from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Box, Button } from "@material-ui/core";
import UIText from "../../js/UI/UITextInput";

class extractSearchPokemon extends React.Component {
  constructor() {
    super();
    this.state = {
      inputParam: "",
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  onChangeInput(e) {
    const inputParam = e.target.value;
    this.setState({
      inputParam,
    });
  }
  onClickSubmit() {
    const { inputParam } = this.state;
    const url = "http://localhost:3000/api/search/pokemon";
    const searchURL = `${url}/${inputParam}`;
    axios
      .get(searchURL)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  }

  render() {
    const { inputParam } = this.state;
    return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            ポケモン情報検索
          </Typography>
          <UIText
            id={"search-pokemon-info"}
            label={"Pokemon name"}
            value={inputParam}
            onChange={this.onChangeInput}
          />
          <Button onClick={this.onClickSubmit}>Submit</Button>
        </Box>
      </Container>
    );
  }
}

export default extractSearchPokemon;
