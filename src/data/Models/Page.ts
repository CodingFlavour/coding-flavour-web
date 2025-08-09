type StaticParams<T = {}> = {
  params: Promise<T & {
    lang: string;
  }>;
};

type Page<T = {}> = React.FC<StaticParams<T>>;


export type { StaticParams };
export default Page;
