import {useRecoilState} from "recoil";
import { strState } from "../../states";

const TextInput = () => {

    const [text, setText] = useRecoilState(strState);

    const onChange = (event:any) => {
      setText(event.target.value);
    };

    return (
        <div>
          <input type="text" value={text} onChange={onChange} />
          <br />
          Echo: {text}
        </div>
    );
}

export default TextInput;
