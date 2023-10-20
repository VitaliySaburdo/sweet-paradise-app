import icons from '../../images/sprite.svg';
import { SVG } from './Icon.styled';
interface IconsProps {
    id: string,
}

export const Icon: React.FC<IconsProps> = ({id, ...props}) => {
    return <>
        <SVG {...props} width={17} height={17}>
            <use href={icons + `#${id}`}></use>
        </SVG>
    </>
}