import { ChangeEvent, useState } from "react";
import { IPropsForm } from "../../utils/interfaces";

const UserForm: React.FC<IPropsForm> = ({ submit }): JSX.Element => {
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")



    const handleChange = (evt: ChangeEvent<HTMLInputElement>): void => {
        
        switch (evt.target.name) {
            case "userName":
                setUserName(evt.target.value)
                break
            case "userEmail":
                setUserEmail(evt.target.value)
                break
            case "userPassword":
                setUserPassword(evt.target.value)
          
        }
    }
       


    const submitUser = (evt: ChangeEvent<HTMLFormElement>) => {
        evt.preventDefault()

        submit({ name: userName, email: userEmail, password: userPassword })
    }


    return (<div>
        <form onSubmit={submitUser}>
            <fieldset>
                <legend>Name</legend>
                <input type="text" name="userName" placeholder="Please, type your name" onChange={handleChange} />
            </fieldset>
            <fieldset>
                <legend>Email</legend>
                <input type="text" name="userEmail" placeholder="Please, type your email" onChange={handleChange} />
            </fieldset>
            <fieldset>
                <legend>Password</legend>
                <input type="text" name="userPassword" placeholder="Please, type your password" onChange={handleChange} />
            </fieldset>
            <button type="submit">Save User</button>
        </form>
    </div>);
}

export default UserForm;