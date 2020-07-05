/*
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @file: index
 * @time: 2020/7/3 23:23
*/

import React, { useState } from 'react';
import { Steps, message, Button } from 'antd';
import PropTypes from 'prop-types';
import './index.less';

const { Step } = Steps;

function RegisterSteps(props) {
    const [ current, setCurrent ] = useState(0);
    //  第一步 的邮箱验证是否正确
    const [ captchaStatus, setCaptchaStatus ] = useState(false);
    const { children } = props;
    //  steps 的长度
    const stepsLength = 3;
    //  Next 按钮的操作
    const next = () => {
        setCurrent(current + 1);
    };

    //  用于修改  captchaStatus 状态的 函数
    const handleChangecaptchaStatus = (value) => {
        setCaptchaStatus(value);
    }

    //  Previous 按钮的操作
    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <div className="register-steps">
            <Steps current={ current }>
                <Step title="Verify" description="Verify your email." />
                <Step title="Information" description="Improve information." />
                <Step title="Success" description="Complete registration." />
            </Steps>
            <div className="steps-content">
                { children
                && React.cloneElement(children, {
                    current,
                    captchaStatus,
                    handleChangecaptchaStatus,
                }) }
            </div>
            <div className="steps-action">
                { current < stepsLength - 1 && (
                    <Button type="primary" onClick={ () => next() } disabled={ !captchaStatus }>
                        Next
                    </Button>
                ) }
                { current === stepsLength - 1 && (
                    <Button type="primary" onClick={ () => message.success('Processing complete!') }>
                        Done
                    </Button>
                ) }
                {current > 0 && (
                    <Button style={ { margin: '0 8px' } } onClick={ () => prev() }>
                        Previous
                    </Button>
                )}
            </div>
        </div>
    )
}

RegisterSteps.propTypes = {
    children: PropTypes.object,
}

export default RegisterSteps;
