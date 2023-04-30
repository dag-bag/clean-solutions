interface props {
  data: {
    [key: string]: meta[];
  };
  question: string;
}

interface optionProps {
  name: string;
  onClick: any;
  isSelected: boolean;
}

import Question from "../question";
import { useRecoilState } from "recoil";
import { componentStateAtom, meta } from "./";

const Selector: React.FC<props> = ({ data, question }) => {
  const keys = Object.keys(data);
  const [state, setState] = useRecoilState(componentStateAtom);

  const onClickHandler = (keyName: string) => {
    const isSelected = state.input.selected.includes(keyName);
    return isSelected
      ? setState({
          ...state,
          input: {
            ...state.input,
            selected: [
              ...state.input.selected.filter((key) => key !== keyName),
            ],
          },
        })
      : setState({
          ...state,
          input: {
            ...state.input,
            selected: [...state.input.selected, keyName],
          },
        });
  };

  return (
    <Question name={question}>
      <div className="max-w-[400px] mx-auto max-h-[160px] overflow-auto customise_scroll_bar">
        {keys.map((keyName: string) => (
          <Option
            name={keyName}
            onClick={onClickHandler}
            isSelected={state.input.selected.includes(keyName)}
          />
        ))}
      </div>
    </Question>
  );
};

const Option: React.FC<optionProps> = ({ name, onClick, isSelected }) => {
  const style = isSelected
    ? { background: "#518CA4", color: " white", transition: "all .3s" }
    : undefined;
  return (
    <div
      style={style}
      onClick={() => {
        onClick(name);
      }}
      className="py-3 bg-gray-100 text-blue-1 rounded-md text-center text-lg my-3 capitalize font-bold"
    >
      {name}
    </div>
  );
};

export default Selector;
