import React, { useState } from 'react';
import s from './Stand.module.css';
import SuperInputText from './common/c1-SuperInputText/SuperInputText';
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox';
import SuperButton from './common/c2-SuperButton/SuperButton';

const Stand = () => {
    const [stateForAllInputs, setValue] = useState<string>('');
    const [error, setError] = useState<string>('');

    const [stateForAllCheckboxes, setChecked] = useState<boolean>(false);

    const handleInputChange = (value: string) => {
        setValue(value);
        if (error) {
            setError('');
        }
    };

    const handleEnterPress = () => {
        if (stateForAllInputs.trim()) {
            setError('');
        } else {
            setError('Error');
        }
        setValue('');
    };

    const handleCheckboxChange = (checked: boolean) => {
        setChecked(checked);
    };

    return (
        <div id={'hw4-stand'} className={s.stand}>
            <div className={s.inputs}>
                <div>
                    <SuperInputText
                        id={'hw4-super-input-like-old'}
                        value={stateForAllInputs}
                        onChange={(e) => handleInputChange(e.currentTarget.value)}
                    />
                </div>
                <div>
                    <SuperInputText
                        id={'hw4-super-input-with-error'}
                        value={stateForAllInputs}
                        onChangeText={handleInputChange}
                        error={error}
                        onEnter={handleEnterPress}
                    />
                </div>
            </div>

            <div className={s.buttons}>
                <div>
                    <SuperButton id={'hw4-super-button-default'}>
                        default
                    </SuperButton>
                </div>
                <div>
                    <SuperButton
                        id={'hw4-super-button-red'}
                        xType={'red'}
                    >
                        red
                    </SuperButton>
                </div>
                <div>
                    <SuperButton
                        id={'hw4-super-button-disabled'}
                        xType={'red'}
                        disabled
                    >
                        disabled
                    </SuperButton>
                </div>
                <div>
                    <SuperButton
                        id={'hw4-super-button-secondary'}
                        xType={'secondary'}
                    >
                        secondary
                    </SuperButton>
                </div>
            </div>

            <div className={s.checkboxes}>
                <div>
                    <SuperCheckbox
                        id={'hw4-super-checkbox-with-text'}
                        checked={stateForAllCheckboxes}
                        onChangeChecked={handleCheckboxChange}
                    >
                        some text
                    </SuperCheckbox>
                </div>
                <div>
                    <SuperCheckbox
                        id={'hw4-super-checkbox-like-old'}
                        checked={stateForAllCheckboxes}
                        onChangeChecked={handleCheckboxChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default Stand;
