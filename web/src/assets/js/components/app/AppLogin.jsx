import React ,{ useState} from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function LoginView(props) {
    return (
        <div>
           <span>로딩중</span>
        </div>
    )
}


let catchLogin = (data) =>{
    console.log("data" , data)
    if(data == null){
       return(
           <LoginView/>
       )
    }
}

export {catchLogin}


function AlertDismissible() {
    const [show, setShow] = useState(true);

    return (
        <>
            <Alert show={show} variant="success">
                <Alert.Heading>How's it going?!</Alert.Heading>
                <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                    lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                    fermentum.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close me ya'll!
                    </Button>
                </div>
            </Alert>

            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </>
    );
}
