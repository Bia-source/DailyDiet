import { AntDesign } from "@expo/vector-icons";
import * as S from "./style";
import { TouchableOpacityProps } from "react-native";

type ButtonComponentProps = TouchableOpacityProps & {
    type: S.ButtonColorStyleProps;
    size: S.ButtonSizeStyleProps;
    icon?: keyof typeof AntDesign.glyphMap;
    text: string;
}

export function Button({ type, size, icon, text, ...rest }: ButtonComponentProps) {
    console.log(type);
    return (
        <S.Container
            {...rest}
            size={size}
            type={type}
        >
            {icon &&
                <S.IconButton
                    name={icon}
                    type={type}
                />
            }
            <S.TextButton type={type}>
                {text}
            </S.TextButton>
        </S.Container>
    )
}