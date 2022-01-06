
import PropTypes from "prop-types";

/**
 * function to build tags for calories, proteines, glucides and lipides 
 * @param{array<Object>} propsDataKey
 */ 
const KeyData = ({propsDataKey}) => {

    return (
        <div className="container-keydata">
            <div className="content-keydata">
                <div className="keydata-logo" style={{backgroundColor :propsDataKey.background}}>
                    <img className="keydata-logo__img" src={propsDataKey.img} alt="" />
                </div>
                <div className="keydata-text">
                    <p className="keydata-text__value">{propsDataKey.value}</p>
                    <p className="keydata-text__name">{propsDataKey.name}</p>
                </div>
            </div>
        </div>
    )
}

KeyData.propTypes={
    propsDataKey: PropTypes.object

}


export default KeyData