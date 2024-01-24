// // useImperativeHandle
import {useRef} from 'react';
//
// import {ForwardedRef, forwardRef, useImperativeHandle, useRef} from 'react';
//
// type Props = {
//     initialText: string;
// }
//
// export type FocusableInputRef = {
//     focus: () => void;
// }
//
// function FocusableInput({initialText}: Props, ref: ForwardedRef<FocusableInputRef>) {
//     const inputRef = useRef<HTMLInputElement>(null);
//
//     useImperativeHandle(ref, () => ({
//         focus: () => {
//             // inputRef.current?.focus();
//             if (inputRef.current) {
//                 inputRef.current.focus();
//             }
//         },
//     }));
//     return <input ref={inputRef}
//                   defaultValue={initialText}
//     />;
// }
//
// const refForwarded = forwardRef<FocusableInputRef, Props>(FocusableInput);
// export {refForwarded as FocusableInput};
//
// function OtherComponent() {
//     const inputRef = useRef<FocusableInputRef>(null);
//
//     const handleClick = () => {
//         if (inputRef.current) {
//             inputRef.current.focus();
//         }
//     };
//
//     return (
//         <div>
//             <FocusableInput initialText="Hello"/>
//             <button onClick={handleClick}>Set focus</button>
//         </div>
//     );
// }
//
// export {OtherComponent};