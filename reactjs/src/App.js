import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";
import { BrowseRouter as Router ,Routes,Route} from "react-router-dom"
import UseTransition from "./Use_Transition/index";

import { Input, Row, Table } from "antd";

// const users = [
//     {
//         name: "Rohit",
//         id: 10,
//     },
//     {
//         name: "Rohit1",
//         id: 10,
//     },
//     {
//         name: "Rohit3",
//         id: 10,
//     },
//     {
//         name: "Ramesh",
//         id: 11,
//     },
//     {
//         name: "Suresh",
//         id: 12,
//     },
// ];

function Home() {
    return <h1>Home Page</h1>;
}

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
}

// const ParentList = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const searchUser = (text) => {
//         console.log(text, "text");
//         setSearchTerm(text);
//     };
//     return (
//         <>
//             <Row>
//                 <h1>List to all users Displayed here</h1>
//             </Row>
//             <Row>
//                 <Input
//                     onChange={(e) => searchUser(e.target.value)}
//                     width={100}
//                 />
//             </Row>
//             <UserList users={users} searchTerm={searchTerm} />
//         </>
//     );
// };

// const UserList = ({ users, searchTerm }) => {
//     // Adding the dependency array [users, searchTerm] to recompute when either changes
//     const filteredUsers = useMemo(() => {
//         return users.filter((user) =>
//             user.name.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//     }, [users, searchTerm]);

//     return (
//         <div>
//             {/* Make sure to return the JSX inside the map function */}
//             {filteredUsers.map((user) => (
//                 <div key={user?.id}>{user?.name}</div>
//             ))}
//         </div>
//     );
// };

// const InputRef = () => {
//     const inputRef = useRef(null);
//     useEffect(() => {
//         inputRef.current.focus();
//     });
//     return (
//         <>
//             <Input ref={inputRef} placeholder="Foouc on Mee" />
//         </>
//     );
// };

// const Counter = () => {
//     const [count, setCount] = useState(0);
//     const prvRef = useRef();
//     useEffect(() => {
//         prvRef.current = count;
//     });
//     let preCount = prvRef.current;
//     const handleCount = () => {
//         setCount((pre) => pre + 1);
//     };
//     return (
//         <>
//             Currrent Count :{count} , Previous Count : {preCount}
//             <Row>
//                 <button onClick={handleCount}>Count</button>
//             </Row>
//         </>
//     );
// };

export default App;
