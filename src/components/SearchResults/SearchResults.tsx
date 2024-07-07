import { Component } from "react";
import "./SearchResults.scss";
import LoadData from "../../api/dataLoader";
import { IAppProps, ICharacter } from "../../types/types";
import NotFound from "../NotFound/NotFound";
import CharacterCard from "../CharacterCard/CharacterCard";

type Props = Pick<IAppProps, "searchTerm">;

interface State {
  characterData: ICharacter[] | null;
  load: boolean;
}

class SearchResults extends Component<Props, State> {
  load = new LoadData();
  state: State = {
    characterData: null,
    load: true,
  };

  componentDidMount() {
    this.loadData(this.props.searchTerm);
  }

  componentDidUpdate(prevProps: Props): void {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      this.setState({ load: true });
      this.loadData(this.props.searchTerm);
    }
  }

  async loadData(searchTerm: string) {
    try {
      const data = await this.load.getData(searchTerm);
      setTimeout(() => {
        this.setState({ characterData: data, load: false });
      }, 200);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { characterData, load } = this.state;

    return (
      <>
        {load ? <div className="loading">Loading....</div> : null}
        <div className="chatacters-list">
          {characterData !== null ? (
            characterData.length ? (
              characterData.map((character: ICharacter) => (
                <CharacterCard
                  key={character.name}
                  {...character}
                ></CharacterCard>
              ))
            ) : (
              <NotFound></NotFound>
            )
          ) : null}
        </div>
      </>
    );
  }
}

export default SearchResults;
