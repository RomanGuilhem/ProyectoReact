import { IoIosCart } from "react-icons/io";

const CartWidget = () => {
    return (
        <div

    style={{

        display: "flex",

        marginRight: "40px",

        alignItems: "center",

        width: "50px",

        justifyContent: "space-between",

    }}

    >
            <IoIosCart size= {25}/>
            5
        </div>
    );
};

export default CartWidget;