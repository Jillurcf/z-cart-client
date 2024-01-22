
const Sectiontitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto my-8">
            <h3 className="text-6xl uppercase font-bold py-4 text-[#3A2E56] text-center">{heading}</h3>
            <p className="text-[#3A2E56] text-center w-4/12 mx-auto mb-2">{subHeading}</p>
        </div>
    );
};


export default Sectiontitle;