import React, { useState } from 'react';

const App = () => {
    const purple = "#c663a4";
    const ch = '😃';

    const [bg, NewBg] = useState(purple);
    const [oldbtn, NewBtn] = useState(ch)

    const BgChange = () => {
        const violet = "#6054a5";
        const ch = '😠';
        NewBg(violet);
        NewBtn(ch);
    };
    
    const ChangeAgainBG = () => {
        const purple = "#c663a4";
        const ch = '😃';
        NewBg(purple);
        NewBtn(ch);
    };
    
    return(
        <React.Fragment>
            <div style ={{background: bg}}>
                <button onClick={BgChange} onDoubleClick={ChangeAgainBG}>Click Me {oldbtn} </button>
            </div>
        </React.Fragment>
    );
};

export default App;