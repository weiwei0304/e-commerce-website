import React from 'react';
import CountUp from 'react-countup';

const subTitle = 'Why Choose Us';
const title = 'Become a Marchant';
const desc =
  'Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn';
const btnText = 'Apply Now';

const countList = [
  {
    iconName: 'icofont-users-alt-4',
    count: '12600',
    text: 'Marchant Enrolled',
  },
  {
    iconName: 'icofont-graduate-alt',
    count: '30',
    text: 'Certified Courses',
  },
  {
    iconName: 'icofont-notification',
    count: '100',
    text: 'Rewards and GitCards',
  },
];

const AboutUS = () => {
  return (
    <div className="instructor-section style-2 padding-tb section-bg-ash">
      <div className="container">
        <div className="section-wrapper">
          <div className="row">
            <div className="col">
              {countList.map((val, i) => (
                <div key={i} className="count-item">
                  <div className="count-inner">
                    <div className="count-icon">
                      <i className={val.iconName}></i>
                    </div>

                    <div className="count-content">
                      <h2>
                        <span className="count">
                          <CountUp end={val.count} />
                        </span>
                        <span>+</span>
                      </h2>
                      <p>{val.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col">
              <div className="instructor-content">
                <p className="subtitle">{subTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
