import React, { useState } from 'react';
import { Button } from 'antd';

export default function Navigator() {
	const [ count, setCount ] = useState(0);
	window.console.log(count, setCount)
    return (
        <div>
            <h1>
                navigator
            </h1>
            <Button type="primary">Click</Button>
        </div>
    )
}
