 import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
 import {Button} from "./index";

function ItemBlock ({id,name,imageUrl,price,types,sizes,onAddCart,cartCount}) {

    const availableTypes=['летняя','зимняя'];
    const availableSizes=sizes;
       const [activeType,setActiveType]= React.useState(types[0])
    const [activeSize,setActiveSize]= React.useState(0)


    const onSelectType =(index)=>{
           setActiveType(index)
    }
    const onSelectSize =(index)=>{
        setActiveSize(index)
    }
const divStyles={
           margin:'25px auto'
}
const handleAddItem=()=>{
           const obj ={
               id,
               name,
               imageUrl,
               price:price,
               size:availableSizes[activeSize],
               type:availableTypes[activeType],
           }
           onAddCart(obj)
}


    return (
        <div className="wheel-block" style={divStyles}>
            <img
                className="wheel-block__image"
                src={imageUrl}
                alt="wheel"
            />
            <h4 className="wheel-block__title">{name}</h4>
            <div className="wheel-block__selector">
                <ul>
                    {
                        availableTypes.map((type,index)=>(
                            <li
                                key={type}
                                onClick={()=>onSelectType(index)}
                                className={classNames({
                                    active:activeType===index,
                                    disabled:!types.includes(index)
                                })}>
                                {type}
                            </li>))
                    }


                </ul>
                <ul>
                    {
                        availableSizes.map((size,index)=>(
                            <li
                                key={size}
                                onClick={()=>onSelectSize(index)}
                                className={classNames({
                                    active:activeSize===index,
                                    disabled:!sizes.includes(size)
                                })}>
                                { size} R
                            </li>))
                    }
                </ul>
            </div>
            <div className="wheel-block__bottom">
                <div className="wheel-block__price"> {price} ₽</div>
                <Button onClick={handleAddItem} className="button--add" outline>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {cartCount &&  <i>{cartCount}</i>}
                </Button>
            </div>
        </div>
    );
}

ItemBlock.propTypes={
    name:PropTypes.string,
    imageUrl:PropTypes.string,
    price:PropTypes.number,
    types:PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes:PropTypes.arrayOf(PropTypes.number).isRequired,
    onAddCart:PropTypes.func,
    cartCount:PropTypes.number

};
ItemBlock.defaultProps={
    types:[],
    price:0,
    sizes:[],
    name:'---',
    imageUrl:'#',


};

export default ItemBlock;