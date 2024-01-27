import {FC, ReactNode, useState} from 'react';

export enum CardVariant {
    outline = 'outline',
    primary = 'primary',
}

interface CardProps {
    width: string;
    height: string;
    variant: CardVariant;
    children: ReactNode;

    onClick: (number: number) => void;
}

const Card: FC<CardProps> = ({width, height, variant, onClick, children}) => {
    const [value, setValue] = useState(0);

    const handleClick = () => {
        setValue(prev => prev++);
    };
    return (
        <div style={{
            width, height,
            border: variant === CardVariant.outline ? '2px solid black' : 'none',
            backgroundColor: variant === CardVariant.primary ? 'lightgray' : 'inherit',
        }}
             onClick={() => onClick(value)}
        >
            {children}
        </div>
    );
};

export {Card};