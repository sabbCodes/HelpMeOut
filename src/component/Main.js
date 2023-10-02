import React from 'react';
import Edit from '../assets/icons/edit.png';
import Copy from '../assets/icons/copy.png';
import Facebook from '../assets/icons/g10.png';
import WhatsApp from '../assets/icons/Vector.png';
import Telegram from '../assets/icons/Group.png';
import ArrowDown from '../assets/icons/arrow-down.png';
import Close from '../assets/icons/close-circle.png';
import PlaceholdeImg from '../assets/images/wanna.png';
import SuccessKite from '../assets/images/success-kite 1.png';

function Main(){
    return(
        <section className='mainWrapper'>
            <div className='mainTop'>
                <div className='leftHand'>
                    <h1>Your video is ready!</h1>
                    <div className='leftHandInner'>
                        <div>
                            <small>Name</small>
                            <div className='leftHandInnerTitle'>
                                <p>Untitled_video_20232509</p>
                                <img src={Edit} alt='edit button' />
                            </div>
                        </div>
                        <div className='leftHandInnerEl'>
                            <input type='email' placeholder='enter email of receiver' />
                            <button>Send</button>
                        </div>
                        <div>
                            <h3>Video Url</h3>
                            <div className='vidUrl'>
                                <p>https://www.helpmeout/Untitled_video_20232509</p>
                                <button>
                                    <img src={Copy} alt='copy button'/>Copy
                                </button>
                            </div>
                        </div>
                        <div>
                            <h4>Share your video</h4>
                            <div className='socialBtns'>
                                <button>
                                    <img src={Facebook} alt='copy button'/>Facebook
                                </button>
                                <button>
                                    <img src={WhatsApp} alt='copy button'/>WhatsApp
                                </button>
                                <button>
                                    <img src={Telegram} alt='copy button'/>Telegram
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rightHand'>
                    <div className='videoPlayer'>
                        {/* <video></video> */}
                        <img src={PlaceholdeImg} alt='placeholder' />
                    </div>
                    <div>
                        <h2>Transcript</h2>
                        <div className='language'>
                            <p>English</p>
                            <img src={ArrowDown} alt='ArrowDown' />
                        </div>
                        <div className='transcript'>
                            <p>0.01</p>
                            <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </p>
                        </div>
                        <div className='transcript'>
                            <p>0.15</p>
                            <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </p>
                        </div>
                        <div className='transcript'>
                            <p>0.30</p>
                            <p>First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <p className='bold'>To ensure the availability and privacy of your video, we recommend saving it to your account.</p>
                <button>Save Video</button>
                <p className='grey'>Don't have an account? <a className='bold' href='/#'>Create account</a></p>
            </div>
            <div className='popup'>
                <div className='popupInner'>
                    <img src={Close} alt='close Popup Button' className='closePopupBtn' />
                    <div className='popupBottom'>
                        <img src={SuccessKite} alt='Success kite' className='kite' />
                        <p>Your video link has been sent to <strong>sabb001@gmail.com</strong></p>
                    </div>
                    <div className='popupBottom'>
                        <p>Would you need to view this video later? Save to your account now!</p>
                        <button>Save Video</button>
                        <p>Don't have an account? <a className='bold' href='/#'>Create account</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;