import React, { useState } from 'react'
import SidePannel from 'src/components/SidePannel/index'
import './Pending.css'
import { Link } from 'react-router-dom';



const Completed = () => {

  const [toggleTrigger, setToggleTrigger] = useState<boolean>(false);


  return (
    <div className="index" data-color-mode="light">
      <div className="text-wrapper">Monitoring</div>
      <div className="frame">
        <div className="div">
          <div className="table-header-cell">
            <div className="content">
              <div className="text-wrapper-2">User</div>
            </div>
          </div>
          <div className="table-cell">
            <div className="frame-2">
              <div className="text-wrapper-3">Sam Altman</div>
              <div className="text-wrapper-4">samaltman123@gmail.com</div>
            </div>
            <img
              className="img"
              alt="External link"
              src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/external-link.svg"
            />
          </div>
          <div className="table-cell-2">
            <div className="frame-2">
              <div className="text-wrapper-3">Sameer Choubey</div>
              <div className="text-wrapper-4">sameerchoubey123@gmail.com</div>
            </div>
            <img
              className="img"
              alt="External link"
              src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/external-link.svg"
            />
          </div>
          <div className="table-cell-2">
            <div className="frame-2">
              <div className="text-wrapper-3">Adarsh Panikkar</div>
              <div className="text-wrapper-4">adarsh@onjuno.com</div>
            </div>
            <img
              className="img"
              alt="External link"
              src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/external-link.svg"
            />
          </div>
          <div className="table-cell-2">
            <div className="frame-2">
              <div className="text-wrapper-3">Pratik Shetty</div>
              <div className="text-wrapper-4">pratik3@gmail.com</div>
            </div>
            <img
              className="img"
              alt="External link"
              src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/external-link.svg"
            />
          </div>
          <div className="table-cell-2">
            <div className="frame-2">
              <div className="text-wrapper-3">Elon Musk</div>
              <div className="text-wrapper-4">elon@twitterceo.com</div>
            </div>
            <img
              className="img"
              alt="External link"
              src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/external-link.svg"
            />
          </div>
          <div className="table-cell-2">
            <div className="frame-2">
              <div className="text-wrapper-3">Trina Kundu</div>
              <div className="text-wrapper-4">trina@onjuno.com</div>
            </div>
            <img
              className="img"
              alt="External link"
              src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/external-link.svg"
            />
          </div>
        </div>
        <div className="frame-3">
          <div className="table-header-cell-2">
            <div className="content">
              <div className="text-wrapper-2">Risk level</div>
            </div>
            <img
              className="img"
              alt="Chevrons up down"
              src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/chevrons-up-down.svg"
            />
          </div>
          <div className="table-cell-3">
            <div className="ellipse" />
            <div className="text-wrapper-5">Medium</div>
          </div>
          <div className="table-cell-3">
            <div className="ellipse-2" />
            <div className="text-wrapper-6">High</div>
          </div>
          <div className="table-cell-3">
            <div className="ellipse-3" />
            <div className="text-wrapper-7">Low</div>
          </div>
          <div className="table-cell-3">
            <div className="ellipse-2" />
            <div className="text-wrapper-6">High</div>
          </div>
          <div className="table-cell-3">
            <div className="ellipse-3" />
            <div className="text-wrapper-7">Low</div>
          </div>
          <div className="table-cell-3">
            <div className="ellipse-3" />
            <div className="text-wrapper-7">Low</div>
          </div>
        </div>
        <div className="frame-4">
          <div className="table-header-cell-2">
            <div className="content">
              <div className="text-wrapper-2">Action reason</div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-8">Flagged</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-8">Closed</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-8">Cleared</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-8">SOI requested</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-8">Flagged</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-8">Closed</div>
          </div>
        </div>
        <div className="frame-5">
          <div className="table-header-cell-2">
            <div className="content">
              <div className="text-wrapper-2">Time to close</div>
            </div>
            <img
              className="chevrons-up-down"
              alt="Chevrons up down"
              src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/chevrons-up-down.svg"
            />
          </div>
          <div className="table-cell-4">
            <div className="frame-2">
              <div className="text-wrapper-9">14 days</div>
            </div>
          </div>
          <div className="table-cell-4">
            <div className="frame-2">
              <div className="text-wrapper-9">14 days</div>
            </div>
          </div>
          <div className="table-cell-4">
            <div className="frame-2">
              <div className="text-wrapper-9">15 days</div>
            </div>
          </div>
          <div className="table-cell-4">
            <div className="frame-2">
              <div className="text-wrapper-9">15 days</div>
            </div>
          </div>
          <div className="table-cell-4">
            <div className="frame-2">
              <div className="text-wrapper-9">15 days</div>
            </div>
          </div>
          <div className="table-cell-4">
            <div className="frame-2">
              <div className="text-wrapper-9">15 days</div>
            </div>
          </div>
        </div>
        <div className="frame-6">
          <div className="table-header-cell-2">
            <div className="content">
              <div className="text-wrapper-2">Date added on</div>
            </div>
            <img
              className="img"
              alt="Chevrons up down"
              src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/chevrons-up-down.svg"
            />
          </div>
          <div className="table-cell-4">
            <div className="text-wrapper-10">12 Oct, 2023</div>
          </div>
          <div className="table-cell-4">
            <div className="text-wrapper-10">12 Oct, 2023</div>
          </div>
          <div className="table-cell-4">
            <div className="text-wrapper-10">12 Oct, 2023</div>
          </div>
          <div className="table-cell-4">
            <div className="text-wrapper-10">12 Oct, 2023</div>
          </div>
          <div className="table-cell-4">
            <div className="text-wrapper-10">12 Oct, 2023</div>
          </div>
          <div className="table-cell-4">
            <div className="text-wrapper-10">12 Oct, 2023</div>
          </div>
        </div>
        <div className="frame-7">
          <div className="content-wrapper">
            <div className="content">
              <div className="text-wrapper-2">Action taken by</div>
            </div>
          </div>
          <div className="table-cell-5">
            <div className="text">
              <div className="text-wrapper-3">Neil</div>
              <div className="text-wrapper-11">neil@onjuno.com</div>
            </div>
          </div>
          <div className="table-cell-5">
            <div className="text">
              <div className="text-wrapper-3">Pratik</div>
              <div className="text-wrapper-11">pratik@onjuno.com</div>
            </div>
          </div>
          <div className="table-cell-5">
            <div className="text">
              <div className="text-wrapper-3">Prashanth</div>
              <div className="text-wrapper-11">prashanth@onjuno.com</div>
            </div>
          </div>
          <div className="table-cell-5">
            <div className="text">
              <div className="text-wrapper-3">Rasleen Kaur</div>
              <div className="text-wrapper-11">rasleen@onjuno.com</div>
            </div>
          </div>
          <div className="table-cell-5">
            <div className="text">
              <div className="text-wrapper-3">Pratik Shetty</div>
              <div className="text-wrapper-11">pratik@onjuno.com</div>
            </div>
          </div>
          <div className="table-cell-5">
            <div className="text">
              <div className="text-wrapper-3">Varun Deshpande</div>
              <div className="text-wrapper-11">varun@onjuno.com</div>
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
          src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/655704a1f1a1f77db0a79f44/img/search-2.svg"
        />
        <div className="div-2">
          <div className="text-wrapper-12">Search</div>
        </div>
      </button>
      <div className="frame-wrapper">
        <div onClick={() => setToggleTrigger(!toggleTrigger)} className="frame-8">
          <div className="label">Trigger reason</div>
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
      <div className="frame-9">
        <div className="frame-8">
          <div className="label">Risk level</div>
          <img
            className="chevron-down"
            alt="Chevron down"
            src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/655704a1f1a1f77db0a79f44/img/chevron-down-3.svg"
          />
        </div>
      </div>
      <div className="sectional-tab-bar">
        <div className="background-line" />
        <Link to={'/monitoring/pending'} className="section">
          <div className="text-wrapper-13">Pending</div>
          <div className="highlight" />
        </Link>
        <Link to={'/monitoring/completed'} className="section-2">
          <div className="text-wrapper-14">Completed</div>
          <div className="highlight-2" />
        </Link>
      </div>
      <div className="frame-10">
        <img
          className="img"
          alt="X circle"
          src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/655704a1f1a1f77db0a79f44/img/x-circle-2.svg"
        />
        <div className="label-2">Close account</div>
      </div>
      <div className="sidepanel">
        <div className="frame-11">
          <img
            className="image"
            alt="Image"
            src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/image-1.png"
          />
          <div className="frame-12">
            <div className="div-wrapper-2">
              <div className="text-wrapper-15">Overview</div>
            </div>
            <div className="div-wrapper-2">
              <div className="text-wrapper-15">Onboarding</div>
            </div>
            <div className="home">
              <div className="text-wrapper-16">Monitoring</div>
            </div>
            <div className="div-wrapper-2">
              <div className="text-wrapper-17">Flagging</div>
            </div>
            <div className="div-wrapper-2">
              <div className="text-wrapper-15">Source of Income</div>
            </div>
            <div className="div-wrapper-2">
              <div className="text-wrapper-15">UAR</div>
            </div>
          </div>
        </div>
        <div className="avatar-text-wrapper">
          <div className="div-2">
            <div className="avatar" />
            <div className="text">
              <div className="text-wrapper-3">Elon Musk</div>
              <div className="text-wrapper-11">elon@twitter.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Completed