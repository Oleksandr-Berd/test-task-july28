import { ChangeEvent, useState } from "react";
import { IPropsForm } from "../../utils/interfaces";

import * as SC from "./UserFormStyled"

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


    return (<SC.FormContainer>
        <SC.FormStyled onSubmit={submitUser}>

            <label>Name
                <SC.InputStyled type="text" name="userName" placeholder="Please, type your name" onChange={handleChange} />

            </label>
            <label>Email
                <SC.InputStyled type="text" name="userEmail" placeholder="Please, type your email" onChange={handleChange} />
            </label>

            <label>Password
                <SC.InputStyled type="text" name="userPassword" placeholder="Please, type your password" onChange={handleChange} />
            </label>
            <SC.SubmitButton type="submit">Save User</SC.SubmitButton>
        </SC.FormStyled>
    </SC.FormContainer>);
}

export default UserForm;