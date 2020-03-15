import React, {useEffect} from "react";
import {Col, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {$httpStore} from "../modules/api/setting";
import Row from "react-bootstrap/Row";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as i from '@fortawesome/free-solid-svg-icons'

export default () => {

    let dispatch = useDispatch();
    // let loginUser = Jwt.decodeJwt();
    let initSetting = useSelector(state => state.userReducer, []);

    useEffect(() => {
        $httpStore(dispatch)
    }, []);

    let store = initSetting.store;

    if (typeof store == 'undefined') {
        return (
            <div>
                <span>loding</span>
            </div>
        )
    }

    return (
        <Container fluid={true}>

            <Row>
                <Col>
                    <h4>My Info</h4>
                </Col>
            </Row>

            <MyInfoForm data={store.user}/>

            <div>
                <div></div>
                <button>
                    <FontAwesomeIcon icon={i.faArrowCircleDown}/>
                </button>
            </div>

            <Row>
                <Col>
                    <h4>My Store Info</h4>
                </Col>
            </Row>

        </Container>
    )
}

function MyInfoForm(props) {

    let loginUser = props.data;
    let keys = Object.keys(loginUser)
        .filter(f => f !== 'seq' && f !== 'create_at' && f !== 'exp' && f !== 'is_use' && f !== 'type');

    let checkType = (key) => {
        if (key === 'birthDate') {
            return "date"
        }
        return "text"
    };

    let $onChange = (e) => {
        let name = e.target.name;
        loginUser[name] = e.target.value
    };

    return (
        <Container>
            <Row>
                <Col>
                    {
                        keys.map((k, i) => (
                            <div className="input-group" key={i}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text modal-input-box" id="">{k}</span>
                                </div>
                                <input type={checkType(k)} className="form-control" defaultValue={loginUser[k]}
                                       name={k}
                                       onChange={$onChange}
                                />
                            </div>
                        ))
                    }
                </Col>
            </Row>
        </Container>
    )
}


function MyStoreInfo(props) {
    let data = props.data;
    let keys = Object.keys(data).filter(f => f !== 'user' && f !== 'img');

    let checkType = (key) => {
        if (key === 'birthDate') {
            return "date"
        }
        return "text"
    };

    let $onChange = (e) => {
        let name = e.target.name;
        data[name] = e.target.value
    };

    return (
        <Container>
            <Row>
                <Col>
                    {
                        keys.map((k, i) => (
                            <div className="input-group" key={i}>
                                <div className="input-group-prepend">
                                    <span className="input-group-text modal-input-box" id="">{k}</span>
                                </div>
                                <input type={checkType(k)} className="form-control" defaultValue={data[k]}
                                       name={k}
                                       onChange={$onChange}
                                />
                            </div>
                        ))
                    }
                </Col>
            </Row>
        </Container>
    )
}
