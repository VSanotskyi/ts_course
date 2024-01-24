// Типізація компонентів
import React, {Component, FC, ReactNode} from 'react';

// type Props = {
//     name: string;
//     age: number;
//     children: React.ReactNode
// }

// const User = ({name, age, children}: Props) => {
//     return (
//         <div>
//             <p>Name: {name}</p>
//             <p>Age: {age}</p>
//             {children}
//         </div>
//     );
// };

// const User: FC<Props> = ({name, age}) => {
//     return (
//         <div>
//             <p>Name: {name}</p>
//             <p>Age: {age}</p>
//         </div>
//     );
// };

// class User extends Component<Props> {
//     render() {
//         const {name, age} = this.props;
//
//         return (
//             <div>
//                 <p>Name: {name}</p>
//                 <p>Age: {age}</p>
//             </div>
//         );
//     }
// }

// type User = {
//     name: string;
//     email: string;
// }
//
// type Props = {
//     user: User
//     onUserUpdate: () => void
// }
//
// const User = ({user, onUserUpdate}: Props) => {
//     return null;
// };
//
// export {User};

