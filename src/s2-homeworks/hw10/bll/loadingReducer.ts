const initState: InitStateType = {
    isLoading: false,
}

export type InitStateType = {
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case 'CHANGE_LOADING':{
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        // пишет студент  // need to fix

        default:
            return state
    }
}

// type LoadingActionType = {
//     type: 'CHANGE_LOADING'
//     isLoading: boolean
// }

type ActionType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => (
    {
        type: 'CHANGE_LOADING',
        isLoading,
    } as const
)
