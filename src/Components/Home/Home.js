import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import '../Home/Home.css'
export default function AccordionUsage() {
    const refundTableStyle = {
        width: '65vw',
        borderCollapse: 'collapse',
        marginTop: '20px',
        padding: '20px',
        border: '1px solid black',
       
    };


    return (
        <div>

            <div className='acoordin'>
                <Accordion className='Accordin_box' >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='accordin_booking_record_icon' />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Sem 2
                    </AccordionSummary>
                    <AccordionDetails>
                        <table style={refundTableStyle} >
                            <thead className='tableHeaderRefundStyle'>
                                <tr className='marks_table_row'>
                                    <th className='marks_subject'>Subject</th>
                                    <th>mid1</th>
                                    <th>mid2</th>
                                    <th>Internal</th>
                                    <th>External</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='marks_table_row' >
                                    <td className='marks_subject' >Numerical Methods usojodkdjzd isjdo iksdgko </td>
                                    <td >maths</td>
                                    <td >maths</td>
                                    <td>maths</td>
                                    <td >maths</td>
                                </tr>
                                <tr className='marks_table_row' >
                                    <td>maths</td>
                                    <td >maths</td>
                                    <td >maths</td>
                                    <td >maths</td>
                                    <td>maths</td>
                                </tr>
                                <tr className='marks_table_row' >
                                    <td >maths</td>
                                    <td >maths</td>
                                    <td >maths</td>
                                    <td >maths</td>
                                    <td >maths</td>
                                </tr>
                            </tbody>
                        </table>


                    </AccordionDetails>
                </Accordion>

            </div>
            <div className='acoordin'>
                <Accordion className='Accordin_box' >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='accordin_booking_record_icon' />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Sem 2
                    </AccordionSummary>
                    <AccordionDetails>
                        <table style={refundTableStyle} >
                            <thead className='tableHeaderRefundStyle'>
                                <tr className='marks_table_row'>
                                    <th className='marks_subject'>Subject</th>
                                    <th>mid1</th>
                                    <th>mid2</th>
                                    <th>Internal</th>
                                    <th>External</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='marks_table_row' >
                                    <td className='marks_subject' >Numerical Methods usojodkdjzd isjdo iksdgko </td>
                                    <td >maths</td>
                                    <td >maths</td>
                                    <td>maths</td>
                                    <td >maths</td>
                                </tr>
                                <tr className='marks_table_row' >
                                    <td>maths</td>
                                    <td >maths</td>
                                    <td >maths</td>
                                    <td >maths</td>
                                    <td>maths</td>
                                </tr>
                                <tr className='marks_table_row' >
                                    <td >maths</td>
                                    <td >maths</td>
                                    <td >maths</td>
                                    <td >maths</td>
                                    <td >maths</td>
                                </tr>
                            </tbody>
                        </table>


                    </AccordionDetails>
                </Accordion>

            </div>
            <div className='acoordin'>
                <Accordion className='Accordin_box' >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='accordin_booking_record_icon' />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Sem 2
                    </AccordionSummary>
                    <AccordionDetails>
                        <table style={refundTableStyle} >
                            <thead className='tableHeaderRefundStyle'>
                                <tr className='marks_table_row'>
                                    <th className='marks_subject'>Subject</th>
                                    <th>mid1</th>
                                    <th>mid2</th>
                                    <th>Internal</th>
                                    <th>External</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='marks_table_row' >
                                    <td className='marks_subject' >Numerical Methods usojodkdjzd isjdo iksdgko </td>
                                    <td >maths</td>
                                    <td >maths</td>
                                    <td>maths</td>
                                    <td >maths</td>
                                </tr>
                                <tr className='marks_table_row' >
                                    <td>maths</td>
                                    <td >maths</td>
                                    <td >maths</td>
                                    <td >maths</td>
                                    <td>maths</td>
                                </tr>
                                <tr className='marks_table_row' >
                                    <td >maths</td>
                                    <td >maths</td>
                                    <td >maths</td>
                                    <td >maths</td>
                                    <td >maths</td>
                                </tr>
                            </tbody>
                        </table>


                    </AccordionDetails>
                </Accordion>

            </div>
        </div>

    );
}