// useRef

import {useRef} from 'react';

// const TextInputWithFocus = () => {
//     const inputEl = useRef<HTMLInputElement>(null);
//
//     const onButtonClick = () => {
//         inputEl.current?.focus();
//     };
//
//     return (
//         <div>
//             <input ref={inputEl}
//                    type="text"
//             />
//             <button onClick={onButtonClick}>Focus</button>
//         </div>
//     );
// };
//
// export {TextInputWithFocus};

// const ComponentWithRef = () => {
//     const divRef = useRef<HTMLDivElement>(null);
//     const textAreaRef = useRef<HTMLTextAreaElement>(null);
//     const selectRef = useRef<HTMLSelectElement>(null);
//
//     return (
//         <div>
//             <div ref={divRef}></div>
//             <textarea ref={textAreaRef}></textarea>
//             <select ref={selectRef}></select>
//         </div>
//     );
// };
//
// export {ComponentWithRef};

// const Counter = () => {
//     const countRef = useRef<number>(0);
//
//     const handleClick = () => {
//         countRef.current += 1;
//         console.log(countRef);
//     };
//
//     return (
//         <div>
//             <button onClick={handleClick}>+ 1</button>
//         </div>
//     );
// };
//
// export {Counter};