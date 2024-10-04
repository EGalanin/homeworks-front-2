import {initialPeople, UserType} from '../HW8'

type ActionType = ReturnType<typeof sortByNameAC>
    | ReturnType<typeof filterByAgeAC>

export const homeWorkReducer = (state: UserType[] = initialPeople, action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...initialPeople.sort((a, b) => a.name.localeCompare(b.name))]
            } else if (action.payload === 'down') {
                return [...initialPeople.sort((a, b) => b.name.localeCompare(a.name))]
            } else
                return initialPeople
        }
        case 'check': {
            return initialPeople.filter(person => person.age >= action.payload).sort((a, b) => a.name.localeCompare(b.name));
        }
        default:
            return state
    }
}

export const sortByNameAC = (value: string) => {
    return (
        {
            type: 'sort',
            payload: value
        } as const
    )
}

export const filterByAgeAC = (value: number) => {
    return (
        {
            type: 'check',
            payload: value
        } as const
    )
}
