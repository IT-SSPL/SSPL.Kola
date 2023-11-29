interface ContentContainerProps {
  children: React.ReactNode;
  style?: string;
}

const ContentContainer = ({ children, style }: ContentContainerProps) => (
  <div
    className={`flex w-full px-8 py-10 md:px-16 md:py-7 lg:py-10 xl:px-24 xl:py-11 rounded-3xl bg-card bg-opacity-60 shadow-center-md dark:bg-darkcard dark:bg-opacity-20 ${style}`}
    style={{ backdropFilter: "blur(10px)" }}
  >
    {children}
  </div>
);

export default ContentContainer;
