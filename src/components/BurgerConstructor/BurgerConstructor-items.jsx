import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useRef} from "react";
import {useDrag, useDrop} from "react-dnd";

import {useDispatch, useSelector} from "react-redux";
import {DELETE_INGRIDIENT, MOVE_INGRIDIENT} from "../../services/actions/Constructor";
import ingridientPropTypes from "../../utils/PropTypes";
import PropTypes from 'prop-types';


export const BurgerConstructorItem = ({props, index, uuid}) => {
    const dispatch = useDispatch()
    const onRemoveItem = (uuid) => {
        dispatch({
            type: DELETE_INGRIDIENT,
            uuid: uuid
        })
    }
    const [opacity, dragRef] = useDrag({
        type: 'item',
        item: {index, uuid},
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    })
    const [, dropRef] = useDrop({
        accept: 'item',
        hover: (item) => {
            if (!ref.current) return
            const dragIndex = item.index;
            const hoverIndex = index;

            dispatch({
                type: MOVE_INGRIDIENT,
                data: {dragIndex, hoverIndex}
            })
            item.index = hoverIndex
        },
    })
    const ref = useRef(null)
   dragRef(dropRef(ref))
    return (
        <>
            <li style={{opacity}} ref={ref} key={props.uuid}>
                <DragIcon type="primary"/>
                <ConstructorElement
                    isLocked={false}
                    text={props.name}
                    price={props.price}
                    handleClose={(() => onRemoveItem(props.uuid))}
                    thumbnail={props.image}
                    extraClass="ml-2"
                />
            </li>

        </>
    )
}

BurgerConstructorItem.propTypes = {
    props: ingridientPropTypes.isRequired,
    index: PropTypes.number.isRequired,
    uuid: PropTypes.string.isRequired
}
BurgerConstructorItem.defaultProps = {
    uuid: 'default-uuid'
}