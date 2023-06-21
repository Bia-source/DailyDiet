import { AntDesign } from "@expo/vector-icons";
import * as S from "./style";
import { TouchableOpacityProps } from "react-native";

type ButtonComponentProps = TouchableOpacityProps & {
    type: S.ButtonColorStyleProps;
    size: S.ButtonSizeStyleProps;
    icon?: keyof typeof AntDesign.glyphMap;
    text: string;
    iconPerson?: any;
    isActive?: boolean;
}

export function Button({ isActive=true, type, size, icon, text, iconPerson, ...rest }: ButtonComponentProps) {
    return (
        <S.Container
            {...rest}
            isActive={isActive}
            size={size}
            type={type}
        >
            {icon &&
                <S.IconButton
                    name={icon}
                    type={type}
                />
            }
            { iconPerson &&
              <S.DivIconPerson>
                {iconPerson}
              </S.DivIconPerson>
            }
            <S.TextButton type={type}>
                {text}
            </S.TextButton>
        </S.Container>
    )
}