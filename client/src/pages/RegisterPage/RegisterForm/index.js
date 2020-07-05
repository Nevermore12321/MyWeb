/*
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @file: index.js
 * @time: 2020/7/3 15:55
*/

import React from 'react';
import PropTypes from 'prop-types';
import Step1VerifyEmail from './Step1.VerifyEmail';
import Step2UserInfo from './Step2.Information';
import Step3Success from './Step3.Success';

function RegisterForm(props) {
    const { current, handleChangecaptchaStatus } = props;

    switch (current) {
        case 0:
            return (
                <Step1VerifyEmail handleChangecaptchaStatus={ handleChangecaptchaStatus } />
            );
        case 1:
            return (
                <Step2UserInfo />
            );
        case 2:
            return (
                <Step3Success />
            );
        default:
            return (
                <div>
                    current steps error
                </div>
            )
    }
}

RegisterForm.propTypes = {
    current: PropTypes.number,
    handleChangecaptchaStatus: PropTypes.func,
}

export default RegisterForm;
