import { useRecoilState } from "recoil";

import Router from "../components/Router";

import { pageNameState } from "../states";
import CharacterCounter from "../components/CharacterSample/CharacterCounter";

const BasicPage = () => {
  const [pageName, setPageName] = useRecoilState(pageNameState);

  function handleOnClick() {
    setPageName("IndexPage");
  }

  return (
    <div>
      <div>
        <h1>BasicPage</h1>
      </div>
      <div>
          <CharacterCounter />
      </div>
      <hr />
      <Router />
    </div>
  );
}

export default BasicPage;
