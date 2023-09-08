import React from 'react'
import mountain from '../assets/mountain.jpg'
import camping from '../assets/camping.jpg'
import everest from '../assets/everest.jpg'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import vacation1 from '../assets/vacation1.jpg'
import vacation2 from '../assets/vacation2.jpg'
import vacation3 from '../assets/vacation3.jpg'


import woman from '../assets/women.jpg'


const Dashboard = () => {

    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
      setDate(newDate);
    };


  return (
    <div className='dashboard'>
        <div>
            <div><h3>Travigo</h3></div>
            <div className='dash-sidebar'>
                <div id='dash'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="30" width="30" viewBox="0 0 24 24">
    <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path>
    </svg>
                    <h4>Dashboard</h4>
                </div>

                <div>
                    <img width="30" height="30" src="https://img.icons8.com/sf-regular/48/ticket.png" alt="ticket"/>
                    <h4>My Tickets</h4>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="30" width="30" viewBox="0 0 64 64">
<path d="M41.148,14H22.852C22.382,14,22,14.382,22,14.852v32.36c0,0.297,0.357,0.448,0.57,0.241l8.557-8.303	c0.487-0.472,1.26-0.472,1.747,0l8.557,8.303C41.643,47.66,42,47.509,42,47.213v-32.36C42,14.382,41.618,14,41.148,14z M41.148,10	C43.827,10,46,12.173,46,14.852v37.46c0,1.925-2.314,2.903-3.695,1.563L32,43.877l-10.305,9.999C20.314,55.216,18,54.237,18,52.313	v-37.46C18,12.173,20.173,10,22.852,10H41.148z"></path>
</svg>
                    <h4>Favorite</h4>
                </div>

                <div>
                    <img width="30" height="30" src="https://img.icons8.com/sf-regular/48/new-post.png" alt="new-post"/>
                    <h4>Message</h4>
                </div>
                
                <div>
                    <img width="30" height="30" src="https://img.icons8.com/sf-regular/48/purchase-order.png" alt="purchase-order"/>
                    <h4>Transation</h4>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="30" width="30" viewBox="0 0 64 64">
<path d="M 29.054688 10 C 27.715688 10 26.571703 10.964203 26.345703 12.283203 L 25.763672 15.664062 C 25.457672 15.781062 25.152469 15.902156 24.855469 16.035156 L 22.058594 14.058594 C 20.830594 13.209594 19.383344 13.520328 18.527344 14.361328 L 14.361328 18.525391 C 13.414328 19.472391 13.288547 20.962641 14.060547 22.056641 L 16.035156 24.855469 C 15.901156 25.152469 15.781063 25.455719 15.664062 25.761719 L 12.283203 26.34375 C 10.963203 26.57075 10 27.715688 10 29.054688 L 10 34.945312 C 10 36.284312 10.964203 37.428297 12.283203 37.654297 L 15.664062 38.236328 C 15.781062 38.542328 15.902156 38.847531 16.035156 39.144531 L 14.058594 41.941406 C 13.286594 43.034406 13.414328 44.525656 14.361328 45.472656 L 18.525391 49.638672 C 19.609391 50.698672 21.124641 50.614453 22.056641 49.939453 L 24.855469 47.964844 C 25.152469 48.098844 25.455719 48.218938 25.761719 48.335938 L 26.34375 51.716797 C 26.57075 53.036797 27.715688 54 29.054688 54 L 34.945312 54 C 36.284312 54 37.428297 53.035797 37.654297 51.716797 L 38.236328 48.335938 C 38.542328 48.218937 38.847531 48.097844 39.144531 47.964844 L 41.941406 49.941406 C 42.766406 50.549406 44.343656 50.768672 45.472656 49.638672 L 49.638672 45.474609 C 50.585672 44.527609 50.711453 43.037359 49.939453 41.943359 L 47.964844 39.144531 C 48.098844 38.847531 48.218938 38.544281 48.335938 38.238281 L 51.716797 37.65625 C 53.036797 37.42925 54 36.284312 54 34.945312 L 54 29.054688 C 54 27.715688 53.035797 26.571703 51.716797 26.345703 L 48.335938 25.763672 C 48.218937 25.457672 48.097844 25.152469 47.964844 24.855469 L 49.941406 22.058594 C 50.713406 20.965594 50.585672 19.474344 49.638672 18.527344 L 45.474609 14.361328 C 44.417609 13.329328 42.952359 13.351547 41.943359 14.060547 L 39.144531 16.035156 C 38.847531 15.901156 38.544281 15.781063 38.238281 15.664062 L 37.65625 12.283203 C 37.42925 10.963203 36.284312 10 34.945312 10 L 29.054688 10 z M 30.214844 14 L 33.787109 14 C 33.848109 14 33.900156 14.043516 33.910156 14.103516 L 34.681641 18.589844 C 36.449641 19.224844 38.104844 19.894141 39.589844 20.619141 L 43.302734 17.996094 C 43.352734 17.961094 43.421844 17.966766 43.464844 18.009766 L 45.990234 20.537109 C 46.033234 20.580109 46.040859 20.647266 46.005859 20.697266 L 43.380859 24.412109 C 44.139859 26.017109 44.824156 27.649359 45.410156 29.318359 L 49.896484 30.091797 C 49.956484 30.101797 50 30.153844 50 30.214844 L 50 33.787109 C 50 33.848109 49.955531 33.900156 49.894531 33.910156 L 45.410156 34.681641 C 44.825156 36.350641 44.148859 37.985844 43.380859 39.589844 L 46.005859 43.304688 C 46.040859 43.354688 46.033234 43.421844 45.990234 43.464844 L 43.464844 45.992188 C 43.421844 46.035187 43.352734 46.040859 43.302734 46.005859 L 39.589844 43.382812 C 37.949844 44.153812 36.313641 44.829109 34.681641 45.412109 L 33.908203 49.896484 C 33.898203 49.956484 33.846156 50 33.785156 50 L 30.212891 50 C 30.151891 50 30.099844 49.955531 30.089844 49.894531 L 29.318359 45.410156 C 27.709359 44.851156 26.075156 44.184859 24.410156 43.380859 L 20.695312 46.005859 C 20.645312 46.040859 20.578156 46.033234 20.535156 45.990234 L 18.007812 43.464844 C 17.964813 43.421844 17.959141 43.352734 17.994141 43.302734 L 20.617188 39.589844 C 19.838187 37.924844 19.161891 36.288641 18.587891 34.681641 L 14.103516 33.908203 C 14.043516 33.898203 14 33.846156 14 33.785156 L 14 30.212891 C 14 30.151891 14.043516 30.100844 14.103516 30.089844 L 18.589844 29.316406 C 19.170844 27.680406 19.837141 26.045156 20.619141 24.410156 L 17.994141 20.695312 C 17.959141 20.645312 17.966766 20.578156 18.009766 20.535156 L 20.535156 18.007812 C 20.578156 17.964813 20.647266 17.959141 20.697266 17.994141 L 24.410156 20.617188 C 25.958156 19.874187 27.599359 19.201891 29.318359 18.587891 L 30.091797 14.103516 C 30.101797 14.043516 30.153844 14 30.214844 14 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z M 32 27 C 34.761 27 37 29.239 37 32 C 37 34.761 34.761 37 32 37 C 29.239 37 27 34.761 27 32 C 27 29.239 29.239 27 32 27 z"></path>
</svg>
                    <h4>Settings</h4>
                </div>
                             
                
                {/* <div className='discount'>
                    <h4>50% Discount!</h4>
                    <p>Get a discount on certain days and don't miss it.</p>
                </div> */}

                <div>
                    <img width="30" height="30" src="https://img.icons8.com/sf-regular/48/export.png" alt="export"/>
                    <h4>Log Out</h4>
                </div>
                
            </div>
        </div>
        <div className='dash-mid'>
            <div className='dash-nav'>
                <div id=''>
                    <h3>Hello, Tanya! 👋</h3>
                    <p>Welcome back and explore the world.</p>
                </div>

                <div class="search-container">
                    <input type="text" id="search-input" placeholder="Search Destination..."></input>
                </div>

                <img width="30" height="30" src="https://img.icons8.com/material-outlined/24/appointment-reminders--v1.png" alt="appointment-reminders--v1"/>
            </div>

            <div className='images'>
                
                <img src={mountain} width="200" height="250"/>
                <img src={camping} width="200" height="250"/>
                <img src={everest} width="200" height="250"/>
            </div>
            <div className='bidding'>
                <div className='destinations'>
                    <div id='dest-nav'>
                        <div>
                            <h3>Best Destination 🌈</h3>
                            <p>100 Destination found</p>
                        </div>
                        <div id='filter'>
                            <img width="24" height="24" src="https://img.icons8.com/external-outline-berkahicon/64/external-Filters-photo-editing-outline-berkahicon.png" alt="external-Filters-photo-editing-outline-berkahicon"/>
                            Filters
                        </div>
                    </div>
                    <div>
                        <div className='ex-dest'>
                            <img src={vacation1} width="80" height="80" />
                            <div className='ex-dest1'>
                                <h5>Redwood Forest</h5>
                                <p>📍 California </p>
                            </div>
                            <div className='ex-dest2'>
                                <h4>$150/day</h4>
                            </div>
                        </div>

                        <div className='ex-dest'>
                            <img src={vacation2} width="80" height="80" />
                            <div className='ex-dest1'>
                                <h5>Sahale Glacier Camp</h5>
                                <p>📍 California </p>
                            </div>
                            <div className='ex-dest2'>
                                <h4>$100/day</h4>
                            </div>
                        </div>

                        <div className='ex-dest'>
                            <img src={vacation3} width="80" height="80" />
                            <div className='ex-dest1'>
                                <h5>Monteverde Forest</h5>
                                <p>📍 California </p>
                            </div>
                            <div className='ex-dest2'>
                                <h4>$120/day</h4>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className='offers'>
                    <img src={woman} height="200px" width="170px" />
                    <h3>Let's Explore The Beauty</h3>
                    <p>Get special offers & news</p>
                    <div className='join-btn'>
                        <h6>Join Now</h6>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='profile'>
                <img src='https://static.vecteezy.com/ti/gratis-vektor/p3/20389525-handzeichnung-cartoon-madchen-susse-madchenzeichnung-fur-profilbild-vektor.jpg' />
                <div>
                    <h3>Tanya Kemkar</h3>
                    <p>Traveler Enthusiast</p>
                </div>
            </div>
            <div className='calendar-container'>
                <Calendar onChange={handleDateChange} value={date} />
            </div>
            <div className='schedule'>
                <h3>My Schedule</h3>
                <div className='ex-dest'>
                    <img src={vacation2} width="80" height="80" />
                    <div >
                        <h4>Crooked Forest</h4>
                        <p>10 Sept - 14 Sept 2023</p>
                    </div>
                </div>
                <div className='ex-dest'>
                    <img src={vacation3} width="80" height="80" />
                    <div >
                        <h4>Gioc Waterfall</h4>
                        <p>12 Oct - 14 Oct 2023</p>
                    </div>
                </div>
                <div className='ex-dest'>
                    <img src={vacation3} width="80" height="80" />
                    <div >
                        <h4>Tartaruga Camp</h4>
                        <p>10 Dec - 14 Dec 2023</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Dashboard

