// Типізація хуків
// useState 
import React, {useState} from 'react';

// const Counter = () => {
//     const [count, setCount] = useState<number>(0);
//
//     const handleClick = () => {
//         setCount(prev => prev + 1);
//     };
//
//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={handleClick}>+ 1</button>
//         </div>
//     );
// };
//
// export {Counter};

// type User = {
//     name: string;
//     email: string;
// }
//
// const User = () => {
//     const [user, setUser] = useState<User>({} as User);
//     return (
//         <div>User</div>
//     );
// };
//
// export {User};

// type Status = 'loading' | 'idle' | 'error' | 'fulfilled'
//
// const LoadingComponent = () => {
//     const [status, setStatus] = useState<Status>('idle');
//
//     const loadDate = async () => {
//         setStatus('loading');
//         try {
//             setTimeout(() => {
//                 setStatus('fulfilled');
//             }, 2000);
//
//         } catch (e) {
//             setStatus('error');
//         }
//     };
//
//     return (
//         <div>
//             <p>Status: {status}</p>
//             <button onClick={loadDate}>load data</button>
//         </div>
//     );
// };
//
// export {LoadingComponent};

// type Props = {
//     initialValue: string;
//     onSave: (value: string) => void
// }
//
// const TextInput = ({initialValue, onSave}: Props) => {
//     const [value, setValue] = useState(initialValue);
//
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const {target: {value}} = e;
//         setValue(value);
//     };
//
//     const handleClick = () => {
//         onSave(value);
//     };
//
//     return (
//         <div>
//             <input type="text"
//                    value={value}
//                    onChange={handleChange}
//             />
//             <button onClick={handleClick}>Save</button>
//         </div>
//     );
// };
//
// export {TextInput};
