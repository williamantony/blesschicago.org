import React, { Component } from 'react';
import './EventSchedule.css';
import Heading from '../Heading/Heading';

class EventSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
      ],
      months: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December',
      ],
      events: [
        {
          dateTime: '1537572600000',
          name: 'Friday Evening',
          place: '120 East Oak St,\nAddison, IL 60101',
        },
        {
          dateTime: '1537628400000',
          name: 'Special Prayer Seminar',
          place: '120 East Oak St,\nAddison, IL 60101',
        },
        {
          dateTime: '1537659000000',
          name: 'Saturday Evening',
          place: '120 East Oak St,\nAddison, IL 60101',
        },
        {
          dateTime: '1537745400000',
          name: 'Sunday Evening',
          place: '120 East Oak St,\nAddison, IL 60101',
        }
      ],
      currentSlide: 0,
      slidesPerView: 3,
      slideOffset: 0,
    };
  }

  slideLeft = () => {
    this.setState({
      currentSlide: (this.state.currentSlide !== 0) ? this.state.currentSlide - 1 : 0,
    });
  }

  slideRight = () => {
    if (this.state.currentSlide < (this.state.events.length - this.state.slidesPerView)) {
      this.setState({
        currentSlide: this.state.currentSlide + 1,
      });
    }
  }

  render() {
    return (
      <div className="EventSchedule">
        <div className="EventSchedule__gradient" />
        <div className="EventSchedule__bg" />
        <div className="EventSchedule__content">
          <div className="wrapper">
            <Heading type="h2" text="Event Schedule" />
            <div className="EventSlider">
              <div className="EventSlider__controls">
                <div className="arrows">
                  <div className="arrow arrow-left" onClick={this.slideLeft} />
                  <div className="arrow arrow-right" onClick={this.slideRight} />
                </div>
              </div>
              <div className="EventSlider__overflow">
                <div 
                  className="EventSlider__content"
                  style={{
                    width: `${(100 / this.state.slidesPerView) * this.state.events.length}%`,
                    marginLeft: `-${ this.state.currentSlide * (100 / this.state.slidesPerView) }%`,
                  }}
                >
                  {
                    this.state.events.map((event, index) => {

                      const dateTime = new Date(parseInt(event.dateTime));

                      const date = dateTime.getDate();
                      const day = this.state.days[dateTime.getDay()];
                      const month = this.state.months[dateTime.getMonth()];
                      const year = dateTime.getFullYear();

                      const hours = dateTime.getHours();
                      const hours12 = (hours > 12) ? hours - 12 : hours;
                      const minutes = dateTime.getMinutes() < 10 ? `0${dateTime.getMinutes()}` : dateTime.getMinutes();
                      const ampm = (hours >= 12) ? 'PM' : 'AM';

                      const itemClass = ((index >= this.state.currentSlide) && (index < (this.state.currentSlide + this.state.slidesPerView))) ? 'EventCard EventCard--in-view' : 'EventCard';

                      return (
                        <div key={index} className={itemClass}>
                          <div className="EventCard__name">{ event.name }</div>

                          <div className="EventCard__row">
                            <div className="EventCard__column">
                              <div className="EventCard__label">Date</div>
                              <div className="EventCard__value">
                                { `${month} ${date}, ${year}` }
                              </div>
                            </div>

                            <div className="EventCard__column">
                              <div className="EventCard__label">Time</div>
                              <div className="EventCard__value">{ `${hours12}:${minutes} ${ampm}` }
                              </div>
                            </div>
                          </div>

                          <div className="EventCard__row">
                            <div className="EventCard__column">
                              <div className="EventCard__label">Place</div>
                              <div className="EventCard__value">
                                {
                                  event.place.split('\n').map((part, i) => {
                                    return <div key={i}>{ part }</div>;
                                  })
                                }
                              </div>
                            </div>
                          </div>

                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default EventSchedule;
