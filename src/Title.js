import React from 'react';

const Title = (props) => {
    return (
        <>
            <h2 className="aisatu">いらっしゃいませ、{props.user}さん！</h2>
            <h3>↓リスト一覧↓</h3>

        </>
    );
};
export default Title;
