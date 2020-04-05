import React, { useEffect} from "react";
import {ButtonGroup, Col, Container, Form, Row} from "react-bootstrap";
import {$setUpCategory, openToCategory} from "../modules/api/category";
import {useDispatch, useSelector} from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as i from '@fortawesome/free-solid-svg-icons'

export default () => {

    let dispatch = useDispatch();

    let initData = useSelector(state=>state.categoryReducer , []);

    let isTheme = useSelector(state=>state.userReducer , []).isTheme;

    useEffect(() => {
        $setUpCategory(dispatch)
    }, [])


    let data = initData.categories;

    if(typeof data === 'undefined'){
       return (
           <div>
               <span>Loding</span>
           </div>
       )
    }

    let keys = Object.keys(data[0]).filter(f => f !== 'create_at')

    return (
        <div className="container-main">
            <Row>
                <Col>



                </Col>
            </Row>
            {/*<Row className="mt-3">*/}
            {/*    <Col>*/}
            {/*        <Button className="lf-btn" onClick={()=>{*/}
            {/*            openToCategory(dispatch)*/}
            {/*        }}>*/}
            {/*            <FontAwesomeIcon icon={initData.isOpen ? i.faCaretSquareRight : i.faCaretSquareLeft}/>*/}
            {/*        </Button>*/}
            {/*        <Table striped bordered hover variant={isTheme ? "light" : "dark"}>*/}
            {/*            <thead>*/}
            {/*            <tr>*/}
            {/*                <th>#</th>*/}
            {/*                {*/}
            {/*                    keys.map((k, i) => (*/}
            {/*                        <th key={i}>{k}</th>*/}
            {/*                    ))*/}
            {/*                }*/}
            {/*            </tr>*/}
            {/*            </thead>*/}
            {/*            <tbody>*/}
            {/*            {*/}
            {/*                data.map((d, i) => (*/}
            {/*                    <tr key={i}>*/}
            {/*                        <td>{i + 1}</td>*/}
            {/*                        {*/}
            {/*                            keys.map((k, i) => (*/}
            {/*                                <td key={i}>{d[k]}</td>*/}
            {/*                            ))*/}
            {/*                        }*/}
            {/*                    </tr>*/}
            {/*                ))*/}
            {/*            }*/}
            {/*            </tbody>*/}
            {/*        </Table>*/}
            {/*    </Col>*/}
            {/*    /!*Table end*!/*/}
            {/*    <CategoryForm keys={keys} isOpen={initData.isOpen}/>*/}
            {/*</Row>*/}
        </div>
    )

}

function CategoryForm(props) {

    let isMake = props.isOpen
    let keys = props.keys;

    if (isMake) {
        return (
            <Col>
                {
                    keys.filter(f => f !== 'seq').map((m, i) => (
                        <Form.Group as={Col} controlId="formGridEmail" key={i}>
                            <Form.Label className="main-ft">{m}</Form.Label>
                            <Form.Control type="text" placeholder={m}/>
                        </Form.Group>
                    ))
                }
                <ButtonGroup size="sm">
                    <Button>Right</Button>
                </ButtonGroup>
            </Col>
        )
    }

    return null;
}
