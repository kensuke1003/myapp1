import React from 'react';
import Item from './Item';

const List = ({ todos, deleteTodo }) => {
    return (
        <>
            <ul>
                {todos.map((props) => {
                    return (
                        <Item deleteTodo={deleteTodo} key={todos.id} todo={props} />
                    )
                })
                }
            </ul>
        </>
    );
}
/*
        <ul>
            <Item content={'マンチェスターシティ'} />
            <Item content={'マンチェスターユナイテッド'} />
            <Item content={'リヴァプール'} />
        </ul>
        */

/*
<ul>
    <Item content={todos[0].content} />
    <Item content={todos[1].content} />
    <Item content={todos[2].content} />

</ul>
*/

export default List;