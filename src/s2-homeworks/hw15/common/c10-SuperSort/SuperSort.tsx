import React from 'react'
import s from '../../HW15.module.css'
// добавить в проект иконки и импортировать
import downIcon from '../../down-svg.svg'
import upIcon from '../../up-svg.svg'
import noneIcon from '../../cursor_svg.svg'

// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === up) return ''; // Сбросить до none
    if (sort === down) return up; // Переключиться на up
    return down; // Переключиться на down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >

            <img
                id={id + '-icon-' + sort}
                src={icon}
                className={s.icon}
            />

            {/*{icon} */}
        </span>
    )
}

export default SuperSort
