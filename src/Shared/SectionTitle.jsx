
const SectionTitle = ({ heading, title }) => {
    return (
        <div>
            <h1 className="text-4xl font-extrabold text-center mt-10 mb-3">{heading}</h1>
            <p className="text-gray-400 px-2 md:px-32 lg:px-72 text-center mb-6">{title}</p>
        </div>
    );
};

export default SectionTitle;