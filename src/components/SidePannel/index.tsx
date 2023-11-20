import React from 'react';

const index = () => {
    return (
        <div className="sidepanel">
            <div className="frame-13">
                <img
                    className="image"
                    alt="Image"
                    src="https://cdn.animaapp.com/projects/6556fd2cae9ea9179a5e586c/releases/6556fd610d066afdd8cf2c23/img/image-1.png"
                />
                <div className="frame-14">
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
                        <div className="text-wrapper-18">elon@twitter.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const sectionStyle: any = {
    alignSelf: 'stretch',
    padding: '10px 16px',
    borderRadius: '7px',
    overflow: 'hidden',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '12px',
    display: 'inline-flex',
};

const highlightedSectionStyle: any = {
    ...sectionStyle,
    background: 'rgba(70, 67, 238, 0.10)',
};

const textStyle: any = {
    color: '#777676',
    fontSize: '16px',
    fontFamily: 'Lettera Text LL',
    fontWeight: '500',
    wordWrap: 'break-word',
};

const highlightedTextStyle: any = {
    ...textStyle,
    color: '#4643EE',
};

const shortTextStyle: any = {
    ...textStyle,
    width: '67px',
};

const profileNameStyle: any = {
    textAlign: 'center',
    color: '#050505',
    fontSize: '14px',
    fontFamily: 'Lettera Text LL',
    fontWeight: '500',
    lineHeight: '18px',
    wordWrap: 'break-word',
};

const profileEmailStyle: any = {
    textAlign: 'center',
    color: '#777676',
    fontSize: '14px',
    fontFamily: 'Lettera Text LL',
    fontWeight: '500',
    lineHeight: '18px',
    wordWrap: 'break-word',
};

export default index;
