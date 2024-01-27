import {ChangeEvent, MouseEvent, useState, DragEvent, useRef} from 'react';

const EventExample = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleClick = (e: MouseEvent) => {
        console.log(inputRef.current?.value);
    };

    const handleDrag = (e: DragEvent<HTMLDivElement>) => {

    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('DROP');
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    };

    return (
        <div>
            <input type="text"
                   placeholder={'1'}
                   value={value}
                   onChange={handleChange}
            />
            <input type="text"
                   placeholder={'2'}
                   ref={inputRef}
            />
            <button onClick={handleClick}>button</button>
            <div draggable
                 onDrag={handleDrag}
                 style={{
                     width: '200px',
                     height: '200px',
                     backgroundColor: 'red',
                     marginBottom: '5px',
                 }}
            ></div>
            <div
                onDrop={handleDrop}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: isDrag ? 'blue' : 'red',
                    marginBottom: '5px',
                }}
            ></div>
        </div>
    );
};

export {EventExample};