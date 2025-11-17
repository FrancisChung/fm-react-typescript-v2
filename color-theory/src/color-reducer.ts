export type UpdateHexColorAction = {
  type: 'update-hex-color'
  payload: {
    hexColor: string;
  }
}

type UpdateRGBColorAction = {
  type: 'update-rgb-color'
  payload: {rgb: [number, number, number]}
}

type ColorState = {
  hexColor: string
}

export const initialState: ColorState = {
  hexColor: '#BADA55'
}

const colorReducer = (state: ColorState = initialState,
                      action: UpdateRGBColorAction | UpdateHexColorAction)=> {
  if (action.type === 'update-hex-color') {
    const {hexColor} = action.payload;
    return { ...state, hexColor };
  }
}