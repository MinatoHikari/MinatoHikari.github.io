const TSXtest = () => {
    const [count, setCount] = React.useState(0);
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "\u8BA1\u6570\u5668"),
        React.createElement("h1", null, count),
        React.createElement("button", { onClick: () => {
                setCount(count + 1);
            } }, "\u6309\u94AE")));
};
export default TSXtest;
