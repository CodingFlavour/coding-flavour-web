import { DictData } from "../locales/dict/dict";

type Component<T = {}> = React.FC<
  T & {
    dict: DictData
  }
>;

export default Component;
