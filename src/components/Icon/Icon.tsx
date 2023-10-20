import icons from '../images/sprite.svg';
import { SVG } from './Icon.styled';

interface IconsProps {
    id: string,
}

export const Icons: React.FC<IconsProps> = (id) => {
    return <>
        <SVG width={17} height={17}>
            <use href={icons + id}></use>
        </SVG>
    </>
}