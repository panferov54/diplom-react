import React from "react";
import {Categories, SortPopup, ItemBlock, LoadingBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory,setSortBy} from "../redux/actions/filters";
import {fetchWheels} from "../redux/actions/wheels";
import {addItemToCart} from "../redux/actions/cart"

const categories =[
    'Индонезия',
    'Европа',
    'Китай',
    'Российская'
];
const sortItems =[
    {name: 'популярности',type:'popular',order:'desc'},
    {name: 'цене',type:'price',order:'desc'},
    {name: 'алфавиту',type:'name',order:'asc'}
]



function Home () {
    const dispatch = useDispatch();
    const items =useSelector(({wheels}) => wheels.items);
    const cartItems =useSelector(({cart}) => cart.items);
    const isLoaded =useSelector(({wheels}) => wheels.isLoaded);
    const {category,sortBy} =useSelector(({filters}) => filters);

    React.useEffect(()=>{
        dispatch(fetchWheels(sortBy,category))
    },[category,sortBy]);

    const onSelectCategory = React.useCallback((index) =>{
        dispatch(setCategory(index))
    },[]);
    const onSelectSortType = React.useCallback((type) =>{
        dispatch(setSortBy(type))
    },[]);

    const addItemCart=(obj)=>{
             dispatch(addItemToCart(obj))
    }
    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category} onClick={onSelectCategory} items={categories} />
                <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType}/>
            </div>
            <h2 className="content__title">Все товары</h2>
            <div className="content__items">


                {isLoaded ?
                    items.map((obj)=>(
                        <ItemBlock
                            onAddCart={addItemCart}
                            key={obj.id}
                            cartCount={cartItems[obj.id]&&cartItems[obj.id].items.length}
                            {...obj}
                        />))
                    : Array(12).fill(0).map((_,index)=><LoadingBlock key={index} />)
                    }






            </div>
        </div>
    );
}

export default Home;