import { useDispatch } from 'react-redux';
import UserForm from './components/UserForm/UserForm';
import { register, updateName } from './redux/auth/operations';
import { IUser } from './utils/interfaces';
import { useAuth } from './hooks';
import { Dna } from "react-loader-spinner";
import { useState } from 'react';
import EditForm from './components/EditForm/EditForm';


const App: React.FC = (): JSX.Element => {
  const [showEditForm, setShowEditForm] = useState<Boolean>(false)

  const dispatch = useDispatch()
  const { user, isRefreshing, isError } = useAuth()

  const handleCreateSubmit = ((data: IUser): void => {
    dispatch(register(data))
  })

  const handleChangeSubmit = ((data: {}): void => {
    dispatch(updateName(data))
    setShowEditForm(!showEditForm)
  })
  const toggleEditForm = (): void => { setShowEditForm(!showEditForm) }

  return (
    <>

      {showEditForm ? <EditForm toggleEditForm={toggleEditForm} submit={handleChangeSubmit} id={user.id} /> : <div>

        {isRefreshing ? <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        /> : null}
        {isError ? <h1>{isError}</h1> : null}
        {user && !isRefreshing && !isError ? <div><h1>Welcome, {user.name} </h1> <button onClick={toggleEditForm}>Edit name</button>  <UserForm submit={handleCreateSubmit} /></div> : null
        }
       



      </div>}

    </>



  );
}

export default App;
