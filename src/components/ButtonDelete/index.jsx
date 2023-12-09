const ButtonDelete = (props) => {
    return (
        <button onClick={() => {props.productDelete(props.productId)}} type="button">
            <img src="./img/icons/cross.svg" alt="Delete"/>
        </button>
    );
}
 
export default ButtonDelete;