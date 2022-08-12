import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import '../../App.css';

const S2 = (props) => {

    return (
        <div className='s3'>
            <br></br>
            <Container>
                <h2>Weekly Events</h2>
                <p className="s2TitleSub">We hold a few weekly event in-store as well as special events. Join our newsletter</p>
                <Table className={props.s2} bordered hover>
                    <thead className={props.s2}>
                        <tr>
                        <th>Day</th>
                        <th>6 - 7 p.m.</th>
                        <th>7 - 8 p.m.</th>
                        <th>8 - 9 p.m.</th>
                        <th>9 - 10 p.m.</th>
                        </tr>
                    </thead>
                    <tbody className={props.s2}>
                        <tr>
                        <td>Mon</td>
                        <td colSpan={3}>Test a board game</td>
                        <td>None</td>
                        </tr>
                        <tr>
                        <td>Fri</td>
                        <td colSpan={4}>Friday Night Magic</td>
                        </tr>
                        <tr>
                        <td>Sat</td>
                        <td colSpan={2}>Retro Game Challege</td>
                        <td colSpan={2}>FPS Tournament</td>
                        </tr>
                    </tbody>
                </Table>
                <br></br>
            </Container>
        </div>
    )
}

export default S2