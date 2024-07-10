import { ICharacter } from "../../types/types";
import "./CharacterCard.scss";

export default function CharacterCard({ name, image }: ICharacter) {
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
