
const Heading = ({title}) => {
    return (
      <div className="w-full px-8 md:px-12 flex justify-center mx-auto mt-64">
        <h1 className="mx-auto  font-bold text-2xl">{title}</h1>
      </div>
    );
};

export default Heading;