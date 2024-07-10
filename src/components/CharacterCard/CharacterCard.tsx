// import { ICharacter } from "../../types/types";
// import "./CharacterCard.scss";

// export default function CharacterCard({ name, image }: ICharacter) {
//   return (
//     <div className="character-card" data-testid="character-card">
//       <h5 className="character-name">{name}</h5>
//       <div className="character-container">
//         <div className="character-img">
//           <img src={image} />
//         </div>
//       </div>
//     </div>
//   );
// }

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
      //   <div className="character-card">
      //     <div className="character-name">{name}</div>
      //     <div className="character-details">
      //       <ul>
      //         <li>Gender: {gender}</li>
      //         <li>Birth year: {birth_year}</li>
      //         <li>Eye color: {eye_color}</li>
      //       </ul>
      //     </div>
      //   </div>
    );
  }
}

export default CharacterCard;
