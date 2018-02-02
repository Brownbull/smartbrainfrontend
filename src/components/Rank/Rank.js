import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='white f3'>
                {`${name} , Your current entry count is ...` }
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </div>
    ); //eof return
} //eof const Rank

export default Rank;