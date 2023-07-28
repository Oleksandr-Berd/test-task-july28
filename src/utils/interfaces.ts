export interface IUser {
    name: string,
    email: string,
    password: string,
}

export interface IPropsForm {
    submit:({name}: IUser)=> void
}

export interface IPropsEditForm {
  toggleEditForm: () => void;
    submit: (data: {}) => void;
    id: string;
}