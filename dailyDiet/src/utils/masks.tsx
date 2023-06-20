import { Masks, createNumberMask, useMaskedInputProps } from 'react-native-mask-input';

const hoursMask = createNumberMask({
    separator: ':',
    precision: 2,
  });
  
export const maskDate = (date: string, setDate:any) => useMaskedInputProps({
    value: date,
    onChangeText: setDate,
    mask: Masks.DATE_DDMMYYYY
}); 

export const maskHours = (hours: string, setHours:any) => useMaskedInputProps({
    value: hours,
    onChangeText: setHours,
    mask: hoursMask
}); 