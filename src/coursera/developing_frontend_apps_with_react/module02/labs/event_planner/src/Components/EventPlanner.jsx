import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>

            {/* Section for describing the purpose or overview of the app */}
            <section className="description">
                <p >
                    Plan and organize your events effortlessly with Event Planner. 
                    From weddings to corporate events, our app provides 
                    all the tools you need to create memorable experiences. 
                    Whether you're a seasoned event planner or just starting out, 
                    Event Planner is designed to make your event planning process seamless and enjoyable.
                </p>
                <button className="get-started-button">Get Started</button>
            </section>

           {/* Section to list of categorize different types of events */}
             <section className="events_categories">
                <ul>
                    <h2>Social Events:</h2>
                    <li>Birthday parties</li>
                    <li>Anniversary</li>
                    <li>Wedding receptions</li>
                    <li>Corporate events</li>
                    <li>Baby showers</li>
                </ul>
                <ul>
                    <h2>Entertainment Events:</h2>
                    <li>Concerts</li>
                    <li>Movie screenings</li>
                    <li>Theater performances</li>
                    <li>Comedy shows</li>
                    <li>Festivals</li>
                </ul>
                <ul>
                    <h2>Community Events:</h2>
                    <li>Charity fundraisers</li>
                    <li>Community fairs</li>
                    <li>Workshops</li>
                    <li>Networking events</li>
                    <li>Public lectures</li>
                </ul>
            </section>

           {/* Section to highlight app features or functionalities  */}
             <section className="features">
                <h1>Features</h1>
                <ul>
                    <li>Easy event creation and management</li>
                    <li>Customizable event templates</li>
                    <li>Guest list management</li>
                    <li>Event reminders and notifications</li>
                    <li>Integration with calendar apps</li>
                </ul>
            </section>

           {/* Section to showcase user reviews or testimonials */}
             <section className="testimonials">
               <h2>Testimonials</h2>
               <div className="testimonial">
                <p> "Event Planner made organizing my wedding a breeze! Highly recommend.</p>
                <p className="author"> - Emily Johnson</p>
               </div>
                <div className="testimonial">
                    <p> "I use Event Planner for all my corporate events. It's incredibly efficient and user-friendly."</p>
                    <p className="author"> - John Smith</p>
               </div>
            </section>

           {/* Section to provide contact information or a contact form */}
             <section className="contact">
                {/* Section heading */}
                <h2>Contact Us</h2>
                {/* Contact form */}
                <form>
                    {/* Name input field */}
                    <input type="text" placeholder="Name" />
                    {/* Email input field */}
                    <input type="email" placeholder="Email" />
                    {/* Message textarea */}
                    <textarea placeholder="Message"></textarea>
                    {/* Submit button */}
                    <button className="submit-button">Send</button>
                </form>            
            </section>
            <Footer />
        </div>
    );
};

export default EventPlanner;
