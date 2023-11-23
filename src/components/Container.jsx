function Container({ children }) {
  return (
    <div className="container mx-auto px-[10px] md:w-[85%] w-full">
      {children}
    </div>
  );
}

export default Container;
