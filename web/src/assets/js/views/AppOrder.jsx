import React, {useState} from "react";
import Table from "react-bootstrap/Table";
import Popover from "react-bootstrap/Popover";
import DayPicker from "react-day-picker";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {useSelector} from "react-redux";



export default () => {

    let testArray = Array.from(Array(10))

    let popover = (
        <Popover id="popover-basic">
            <DayPicker/>
            {/*<DayPicker/>*/}
        </Popover>
    );

    let theme = useSelector(state => state.userReducer, []).isTheme;

    return (
        <div className="container-main">

            <div className="mt-4">
                {/*<div className="text-right">*/}

                    <DayPickerInput
                        onDayChange={day => console.log(day)}
                    ></DayPickerInput>
                    <DayPickerInput
                        onDayChange={day => console.log(day)}
                    ></DayPickerInput>


                    {/*<OverlayTrigger trigger="click" placement="bottom-start" overlay={popover}>*/}
                    {/*    <Button variant={AppTheme()}>*/}
                    {/*        <FontAwesomeIcon icon={i.faCalendar}/>*/}
                    {/*    </Button>*/}
                    {/*</OverlayTrigger>*/}
                {/*</div>*/}

                <div className="tableFixHead mt-3" >
                    <Table striped bordered hover variant={theme ? "light" : "dark"}>
                        <thead>
                        <tr>
                            <th className="table-hd-bg">#</th>
                            <th className="table-hd-bg">First Name</th>
                            <th className="table-hd-bg">Last Name</th>
                            <th className="table-hd-bg">Username</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            testArray.map((m, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>Mark{i + 1}</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
