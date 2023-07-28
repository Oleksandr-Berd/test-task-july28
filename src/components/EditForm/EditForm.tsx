import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { createPortal } from 'react-dom';
import { IPropsEditForm } from '../../utils/interfaces';
import { ChangeEvent, useState } from 'react';



const modalRoot: any = document.querySelector('#modal-root');

const EditForm: React.FC<IPropsEditForm> = ({ toggleEditForm, submit, id }): JSX.Element => {
    const [newName, setNewName] = useState<string>("")

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setNewName(evt.target.value)
    }

    const handleSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
        evt.preventDefault()

        submit({ newName, id })
    }

    return createPortal(
        <>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog fullscreen={true}>
                    <Modal.Header>
                        <Modal.Title>You can Change Your Name</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={handleSubmit}>
                        <Modal.Body>

                            <label>Edit name
                                <input type="text" placeholder='type new name' onChange={handleChange} />
                            </label>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={toggleEditForm}>Close</Button>
                            <Button type='submit' variant="primary">Save changes</Button>
                        </Modal.Footer>
                    </form>
                </Modal.Dialog>
            </div>
        </>, modalRoot
    );
};

export default EditForm;
