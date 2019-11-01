import React, { memo } from 'react';
import './Submit.css';

export default memo(function Submit() {
    return (
        <div className="submit">
            <button type="submit" className="submit-button">
                {' '}
                搜索{' '}
            </button>
        </div>
    );
});
