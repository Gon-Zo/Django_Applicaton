import React, {Fragment, useEffect, useState} from "react";
import {$httpCategory, $isOpen, $isOpenToCategory} from "../../modules/api/product";
import {$isUserModalOpen} from "../../modules/api/user";
import {Button, Col, Form, Modal, Table} from "react-bootstrap";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {$fetchUpdateToUser, $fetchUsers} from "../../modules/api/user";

export {CategoryModal , ProductEditor  , UserInfoModal}

/**
 * @return {null}
 */
function CategoryModal(props) {

    let initData = props.data;
    let dispatch = props.dispatch;
    let isShow = initData.isCategory;
    let category = initData.category;
    let [ isInsert , setInsert ] = useState(false);

    useEffect(() => {
        $httpCategory(dispatch)
    }, []);

    if (isShow) {

        let keys = Object.keys(category[0]).filter(f=>f!=='create_at');

        let renderContent = (flag) => {
            if (flag) {
                return (
                    <Fragment>
                        {
                            keys.filter(f=>f!=='seq').map((m , i ) => (
                                <Form.Group as={Col} controlId="formGridEmail" key={i}>
                                    <Form.Label>{m}</Form.Label>
                                    <Form.Control type="text" placeholder={m} />
                                </Form.Group>
                            ))
                        }
                    </Fragment>
                )
            } else {
                return (
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                        <tr>
                            <th>#</th>
                            {
                                keys.map((m, i) => (
                                    <th key={i}>
                                        {m}
                                    </th>
                                ))
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            category.map((c, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    {
                                        keys.map((k, j) => (
                                            <td key={j}>{c[k]}</td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                )
            }
        };

        let renderBtnGroup = (flag) => {
            if (flag) {
                return (
                    <Fragment>
                        <Button variant="outline-success">Save</Button>
                        <Button variant="outline-warning" onClick={() => setInsert(false)}>abate</Button>
                    </Fragment>
                )
            } else {
                return (
                    <Button variant="outline-light" onClick={() => setInsert(true)}>Insert</Button>
                )
            }
        };

        return (
            <Modal
                size="lg"
                show={isShow}
                onHide={() => $isOpenToCategory(dispatch)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className="bg-dark">
                    <Modal.Title id="contained-modal-title-vcenter" className="light-ft">
                        Category Info
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {renderContent(isInsert)}
                </Modal.Body>
                <Modal.Footer className="bg-dark">
                    {
                        renderBtnGroup(isInsert)
                    }
                    <Button variant="outline-danger" onClick={() => $isOpenToCategory(dispatch)}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return null
}

/**
 * Product Modal
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function ProductEditor(props) {

    let dispatch = props.dispatch;
    let isOpen = props.isOpen;
    let data = props.data;
    let keys =  Object.keys(data);

    let $onClick = () => {
    };

    let inputType = (key) => {
        if (key === 'birthDate') {
            return 'date'
        } else if (key === 'isUse') {
            return 'checkbox'
        } else {
            return 'text'
        }
    };

    let $onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === 'isUse') {
            value = e.target.checked
        }
        data[name] = value
    };

    return (
        <Modal
            size="lg"
            show={isOpen}
            onHide={() => $isOpen(dispatch)}
            aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    상품 등록
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    keys.filter((f) => f !== 'seq' && f !== 'createAt').map((k, i) => {
                        // let name = AppName.changeNameByProd(k);
                        let name = k;
                        return k === 'info' ? (
                            <div key={i}>
                                <span>{name}</span>
                                <CKEditor
                                    editor={ClassicEditor}
                                    data="<p>Hello from CKEditor 5!</p>"
                                    onInit={editor => {
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        let data = editor.getData();
                                        console.log({event, editor, data});
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="input-group" key={i}>
                                <div className="input-group-prepend">
                                       <span className="input-group-text modal-input-box">
                                          {name}
                                         </span>
                                </div>
                                <input type={inputType(k)}
                                       className="form-control"
                                       defaultValue={data[k]}
                                       defaultChecked={data[k]}
                                       name={k}
                                       onChange={$onChange}/>
                            </div>
                        )
                    })
                }
            </Modal.Body>
            <Modal.Footer>
                <button onClick={$onClick} className="btn btn-default btn-dark">Save</button>
            </Modal.Footer>
        </Modal>
    )
}


/**
 * user modal
 * @param props
 * @returns {null|*}
 * @constructor
 */
function UserInfoModal(props) {
    let initData = props.initData;
    let isOpen = initData.isOpen;
    let dispatch = props.dispatch;
    let userData = initData.user;

    let keys = Object.keys(userData).filter(f => f !== 'create_at');

    let $handleClose = () => {
        $isUserModalOpen(dispatch)
    };

    let inputType = (key) => {
        if (key === 'birthDate') {
            return 'date'
        } else if (key === 'is_use') {
            return 'checkbox'
        } else {
            return 'text'
        }
    };

    let $onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === 'isUse') {
            value = e.target.checked
        }
        userData[name] = value
    };

    let $handleUpdate = () => {
        $fetchUpdateToUser(dispatch, initData);
        $fetchUsers(dispatch, initData);
        $handleClose();
    };

    return (
        <Modal
            show={isOpen} onHide={$handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    keys.filter((f) => f !== 'seq' && f !== 'createAt').map((m, i) => (
                        <div className="input-group" key={i}>
                            <div className="input-group-prepend">
                                <span className="input-group-text modal-input-box" id="">{m}</span>
                            </div>
                            <input type={inputType(m)} className="form-control" defaultValue={userData[m]} defaultChecked={userData[m]}
                                   name={m}
                                   onChange={$onChange}/>
                        </div>
                    ))
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={$handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={$handleUpdate}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
