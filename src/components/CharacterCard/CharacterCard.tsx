import { Component } from "react";
import { ICharacter } from "../../types/types";
import "./CharacterCard.scss";

class CharacterCard extends Component<ICharacter> {
  render() {
    const { name, image } = this.props;
    return (
      <div className="character-card" data-testid="character-card">
        <h5 className="character-name">{name}</h5>
        <div className="character-container">
          <div className="character-img">
            <img src={image} />
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterCard;
