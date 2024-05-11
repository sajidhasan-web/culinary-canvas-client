import PropTypes from 'prop-types'; 

const SectionHead = ({title, des}) => {
    return (
        <div className="text-center">
            <h3 className="text-xl font-bold md:text-3xl">{title}</h3>
            <p className="max-w-md mx-auto">{des}</p>
        </div>
    );
};

SectionHead.propTypes = {
    title: PropTypes.string.isRequired,
    des: PropTypes.string.isRequired,
}


export default SectionHead;