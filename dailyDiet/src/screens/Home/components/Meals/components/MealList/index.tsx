import * as S from "./style";

type MealListProps = {
    time: string;
    title: string;
    status: S.MealStatusType;
}

export function MealList({ time, title, status }: MealListProps) {
    return (
        <S.Container>
            <S.Meal>
                <S.teste>
                    <S.Time>
                        {time}
                    </S.Time>
                    <S.LineVertical> | </S.LineVertical>
                    <S.Title>
                        {title}
                    </S.Title>
                </S.teste>

                <S.Status type={status}/>
            </S.Meal>
        </S.Container>
    )
}