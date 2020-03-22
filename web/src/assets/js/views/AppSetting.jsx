import React, {useEffect} from "react";
import {Button, Col, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {$httpStore} from "../modules/api/setting";
import {$fetchUpdateToUser} from "../modules/api/user";
import Row from "react-bootstrap/Row";


export default () => {

    let dispatch = useDispatch();
    let initSetting = useSelector(state => state.settingReducer, []);

    useEffect(() => {
        $httpStore(dispatch)
    }, []);

    let store = initSetting.store;

    if (typeof store === 'undefined') {
        return (
            <div>
                <span>로딩중...</span>
            </div>
        )
    }

    let $onClick = () => {
        $fetchUpdateToUser(dispatch, initSetting.store)
    };

    return (
        <Container fluid={true}>
            <ProductTitle title={"My Info"}/>
            <MyInfoForm data={store.user}/>
            <ProductTitle title={"My Store Info"}/>
            <MyStoreInfo data={store}/>
            <div>
                <Button onClick={$onClick} variant="warning" >Success</Button>
            </div>
        </Container>
    )

}

/**
 * product title componet
 * @param props
 * @returns {*}
 * @constructor
 */
function ProductTitle(props) {
    let title = props.title;
    return(
        <Row>
            <Col>
                <h4>{title}</h4>
            </Col>
        </Row>
    )
}

/**
 * @return {null}
 */
function MyInfoForm(props) {

    let loginUser = props.data;

    if (typeof loginUser === 'undefined'){
        return null
    }

    let keys = Object.keys(loginUser)
        .filter(f => f !== 'seq' && f !== 'create_at'  && f !== 'is_use' && f !== 'type' && f !== 'img');

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

    let _onChangeImage = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            let result = reader.result;
            let img = document.getElementById("myProfile");
            loginUser['img'] = result.split(",")[1];
            console.log(loginUser['img']);
            img.src = result;
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
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
                                       onChange={$onChange}/>
                            </div>
                        ))
                    }
                    {/*Input Form end*/}
                    <div>
                        <span>Image</span>
                        <label htmlFor="profileInput">
                            <img id="myProfile" src={"data:image/png;base64, " + loginUser['img']}
                                 width="170px" height="170px" alt={"유저 이미지"}/>
                        </label>
                        <input id="profileInput" className="input-none"  type="file" onChange={_onChangeImage}/>
                    </div>
                    {/* Image Form*/}
                </Col>
            </Row>
        </Container>
    )
}

/**
 * @return {null}
 */
function MyStoreInfo(props) {
    let data = props.data;

    if (typeof data === 'undefined'){
        return  null
    }

    let keys = Object.keys(data).filter(f => f !== 'user' && f !== 'img' && f !== 'create_at');

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
