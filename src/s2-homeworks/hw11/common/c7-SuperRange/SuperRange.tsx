import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: '#243e83', // цвет слайдера
                height: 12, // высота слайдера
                width: 500,
                '& .MuiSlider-thumb': {
                    height: 24, // высота ползунка
                    width: 24, // ширина ползунка
                    backgroundColor: 'white', // цвет фона ползунка
                    border: '2px solid currentColor', // цвет границы ползунка
                    '&:hover': {
                        boxShadow: 'inherit', // эффект при наведении
                    },
                    '&.Mui-focusVisible': {
                        boxShadow: 'inherit', // эффект при фокусе
                    },
                },
                '& .MuiSlider-track': {
                    height: 15, // высота трека
                    borderRadius: 4, // радиус границ трека
                },
                '& .MuiSlider-rail': {
                    height: 12, // высота рельса
                    borderRadius: 4, // радиус границ рельса
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
