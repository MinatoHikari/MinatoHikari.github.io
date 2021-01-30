import { React } from 'https://deno.land/x/pagic@v1.2.0/mod.ts';

const TSXtest = () => {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <h1>计数器</h1>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1);
            }}>按钮
            </button>
        </>
    );
};

export default TSXtest;
