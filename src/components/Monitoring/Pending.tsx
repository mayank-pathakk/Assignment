import React, { useState } from 'react'
import SidePannel from 'src/components/SidePannel/index'
import './Completed.css'
import { Link } from 'react-router-dom';
const Pending = () => {

    const [toggleTrigger, setToggleTrigger] = useState<boolean>(false);

    return (
        <div className="index1" data-color-mode="light">
            <div className="text-wrapper1">Monitoring</div>
            <div className="sectional-tab-bar1">
                <div className="background-line1" />
                <Link to={'/monitoring/pending'} className="section1">
                    <div className="overview1">Pending</div>
                    <div className="highlight1" />
                </Link>
                <Link to={'/monitoring/completed'} className="overview1-wrapper">
                    <div className="div1">Completed</div>
                </Link>
            </div>
            <div className="overlap-group">
                <div className="frame1">
                    <div className="frame1-2">
                        <div className="table-header-cell">
                            <div className="content">
                                <div className="text-wrapper1-2">User</div>
                            </div>
                        </div>
                        <div className="table-cell">
                            <div className="frame1-3">
                                <div className="text-wrapper1-3">Sam Altman</div>
                                <div className="text-wrapper1-4">samaltman123@gmail.com</div>
                            </div>
                            <img
                                className="img"
                                alt="External link"
                                src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/external-link.svg"
                            />
                        </div>
                        <div className="table-cell-2">
                            <div className="frame1-3">
                                <div className="text-wrapper1-3">Sameer Choubey</div>
                                <div className="text-wrapper1-4">sameerchoubey123@gmail.com</div>
                            </div>
                            <img
                                className="img"
                                alt="External link"
                                src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/external-link.svg"
                            />
                        </div>
                        <div className="table-cell-2">
                            <div className="frame1-3">
                                <div className="text-wrapper1-3">Adarsh Panikkar</div>
                                <div className="text-wrapper1-4">adarsh@onjuno.com</div>
                            </div>
                            <img
                                className="img"
                                alt="External link"
                                src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/external-link.svg"
                            />
                        </div>
                        <div className="table-cell-2">
                            <div className="frame1-3">
                                <div className="text-wrapper1-3">Pratik Shetty</div>
                                <div className="text-wrapper1-4">pratik3@gmail.com</div>
                            </div>
                            <img
                                className="img"
                                alt="External link"
                                src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/external-link.svg"
                            />
                        </div>
                        <div className="table-cell-2">
                            <div className="frame1-3">
                                <div className="text-wrapper1-3">Elon Musk</div>
                                <div className="text-wrapper1-4">elon@twitterceo.com</div>
                            </div>
                            <img
                                className="img"
                                alt="External link"
                                src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/external-link.svg"
                            />
                        </div>
                        <div className="table-cell-2">
                            <div className="frame1-3">
                                <div className="text-wrapper1-3">Trina Kundu</div>
                                <div className="text-wrapper1-4">trina@onjuno.com</div>
                            </div>
                            <img
                                className="img"
                                alt="External link"
                                src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/external-link.svg"
                            />
                        </div>
                    </div>
                    <div className="frame1-4">
                        <div className="table-header-cell-2">
                            <div className="content">
                                <div className="text-wrapper1-2">Risk level</div>
                            </div>
                            <img
                                className="img"
                                alt="Chevrons up down"
                                src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/chevrons-up-down.svg"
                            />
                        </div>
                        <div className="table-cell-3">
                            <div className="ellipse" />
                            <div className="text-wrapper1-5">Medium</div>
                        </div>
                        <div className="table-cell-3">
                            <div className="ellipse-2" />
                            <div className="text-wrapper1-6">High</div>
                        </div>
                        <div className="table-cell-3">
                            <div className="ellipse-3" />
                            <div className="text-wrapper1-7">Low</div>
                        </div>
                        <div className="table-cell-3">
                            <div className="ellipse-2" />
                            <div className="text-wrapper1-6">High</div>
                        </div>
                        <div className="table-cell-3">
                            <div className="ellipse-3" />
                            <div className="text-wrapper1-7">Low</div>
                        </div>
                        <div className="table-cell-3">
                            <div className="ellipse-3" />
                            <div className="text-wrapper1-7">Low</div>
                        </div>
                    </div>
                    <div className="frame1-5">
                        <div className="table-header-cell-2">
                            <div className="content">
                                <div className="text-wrapper1-2">Trigger reason</div>
                            </div>
                        </div>
                        <div className="div-wrapper">
                            <div className="text-wrapper1-8">IP Change</div>
                        </div>
                        <div className="div-wrapper">
                            <div className="text-wrapper1-8">FIFO</div>
                        </div>
                        <div className="div-wrapper">
                            <div className="text-wrapper1-8">IP Change</div>
                        </div>
                        <div className="div-wrapper">
                            <div className="text-wrapper1-8">FIFO</div>
                        </div>
                        <div className="div-wrapper">
                            <div className="text-wrapper1-8">FIFO</div>
                        </div>
                        <div className="div-wrapper">
                            <div className="text-wrapper1-8">FIFO</div>
                        </div>
                    </div>
                    <div className="frame1-6">
                        <div className="table-header-cell-2">
                            <div className="content">
                                <div className="text-wrapper1-2">In queue for</div>
                            </div>
                            <img
                                className="img"
                                alt="Chevrons up down"
                                src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/chevrons-up-down.svg"
                            />
                        </div>
                        <div className="table-cell-4">
                            <div className="frame1-3">
                                <div className="text-wrapper1-9">4 days</div>
                            </div>
                        </div>
                        <div className="table-cell-4">
                            <div className="frame1-3">
                                <div className="text-wrapper1-9">4 days</div>
                            </div>
                        </div>
                        <div className="table-cell-4">
                            <div className="frame1-3">
                                <div className="text-wrapper1-9">5 days</div>
                            </div>
                        </div>
                        <div className="table-cell-4">
                            <div className="frame1-3">
                                <div className="text-wrapper1-9">5 days</div>
                            </div>
                        </div>
                        <div className="table-cell-4">
                            <div className="frame1-3">
                                <div className="text-wrapper1-9">5 days</div>
                            </div>
                        </div>
                        <div className="table-cell-4">
                            <div className="frame1-3">
                                <div className="text-wrapper1-9">5 days</div>
                            </div>
                        </div>
                    </div>
                    <div className="frame1-7">
                        <div className="table-header-cell-2">
                            <div className="content">
                                <div className="text-wrapper1-2">Date added on</div>
                            </div>
                            <img
                                className="img"
                                alt="Chevrons up down"
                                src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/chevrons-up-down.svg"
                            />
                        </div>
                        <div className="table-cell-4">
                            <div className="text-wrapper1-10">12 Oct, 2023</div>
                        </div>
                        <div className="table-cell-4">
                            <div className="text-wrapper1-10">12 Oct, 2023</div>
                        </div>
                        <div className="table-cell-4">
                            <div className="text-wrapper1-10">12 Oct, 2023</div>
                        </div>
                        <div className="table-cell-4">
                            <div className="text-wrapper1-10">12 Oct, 2023</div>
                        </div>
                        <div className="table-cell-4">
                            <div className="text-wrapper1-10">12 Oct, 2023</div>
                        </div>
                        <div className="table-cell-4">
                            <div className="text-wrapper1-10">12 Oct, 2023</div>
                        </div>
                    </div>
                    <div className="frame1-7">
                        <div className="content-wrapper">
                            <div className="content">
                                <div className="text-wrapper1-2">Previously reviewed</div>
                            </div>
                        </div>
                        <div className="table-cell-5">
                            <div className="frame1-3">
                                <div className="text-wrapper1-9">Yes</div>
                                <div className="text-wrapper1-4">23 Aug, 2023</div>
                            </div>
                        </div>
                        <div className="table-cell-5">
                            <div className="text-wrapper1-11">No</div>
                        </div>
                        <div className="table-cell-5">
                            <div className="text-wrapper1-11">No</div>
                        </div>
                        <div className="table-cell-5">
                            <div className="frame1-3">
                                <div className="text-wrapper1-9">Yes</div>
                                <div className="text-wrapper1-4">12 Sep, 2023</div>
                            </div>
                        </div>
                        <div className="table-cell-5">
                            <div className="frame1-3">
                                <div className="text-wrapper1-9">Yes</div>
                                <div className="text-wrapper1-4">12 Sep, 2023</div>
                            </div>
                        </div>
                        <div className="table-cell-5">
                            <div className="frame1-3">
                                <div className="text-wrapper1-9">Yes</div>
                                <div className="text-wrapper1-4">12 Sep, 2023</div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    toggleTrigger &&
                    <div className="frame1-8">
                        <div className="frame1-9">
                            <div className="text-wrapper1-12">Hard flag</div>
                        </div>
                        <div className="frame1-10">
                            <div className="text-wrapper1-13">Temp flag</div>
                        </div>
                        <div className="frame1-9">
                            <div className="text-wrapper1-12">Restricted unflag</div>
                        </div>
                        <div className="frame1-9">
                            <div className="text-wrapper1-12">Un flag</div>
                        </div>
                        <div className="frame1-9">
                            <div className="text-wrapper1-12">Reviewed</div>
                        </div>
                    </div>
                }
            </div>
            <button className="button">
                <img
                    className="img"
                    alt="Search"
                    src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/65570087f0972e47c0b87366/img/search-1.svg"
                />
                <div className="div1-2">
                    <div className="text-wrapper1-14">Search</div>
                </div>
            </button>
            <div className="frame1-wrapper">
                <div className="frame1-11" onClick={() => setToggleTrigger(!toggleTrigger)} >
                    <div className="label1">Trigger reason</div>
                    {
                        toggleTrigger ?
                            <img
                                className="img1-2"
                                alt="Chevron up"
                                src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/65570087f0972e47c0b87366/img/chevron-up.svg"
                            /> : <img
                                className="img1-2"
                                alt="Chevron down"
                                src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/chevron-down.svg"
                            />
                    }
                </div>
            </div>
            <div className="frame1-12">
                <div className="frame1-11">
                    <div className="label1">Risk level</div>
                    <img
                        className="img1-2"
                        alt="Chevron down"
                        src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/chevron-down.svg"
                    />
                </div>
            </div>
            <SidePannel />
            <div className="frame1-15">
                <img
                    className="img"
                    alt="X circle"
                    src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/65570087f0972e47c0b87366/img/x-circle-1.svg"
                />
                <div className="label1-2">Close account</div>
            </div>
        </div>
    );
}

export default Pending