import React from 'react';

const title = 'About ShopCart';
const desc =
  'Eduaid theme number one world class university in the world There are student are studing always in this university for all time.';
const ItemTitle = 'Categories';
const quickTitle = 'Quick Links';
const tweetTitle = 'Recent Tweets';

const addressList = [
  { iconName: 'icofont-google-map', text: 'New York, USA.' },
  { iconName: 'icofont-phone', text: '+880 123 456 789' },
  { iconName: 'icofont-envelope', text: 'info@shopcart.com' },
];

const socialList = [
  { iconName: 'icofont-facebook', siteLink: '#', className: 'facebook' },
  { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter' },
  { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin' },
  { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram' },
  { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest' },
];

const ItemList = [
  { text: 'All Products', link: '/shop' },
  { text: 'Shop', link: '/shop' },
  { text: 'Blog', link: '/blog' },
  { text: 'About', link: '/about' },
  { text: 'Policy', link: '#' },
  { text: 'FAQs', link: '/about' },
];

const quickList = [
  { text: 'Summer Sessions', link: '#' },
  { text: 'Events', link: '#' },
  { text: 'Gallery', link: '#' },
  { text: 'Forums', link: '#' },
  { text: 'Privacy Policy', link: '#' },
  { text: 'Terms of Use', link: '#' },
];

const tweetList = [
  {
    iconName: 'icofont-twitter',
    desc: 'Aminur islam @ShopCart Greetings! #HTML_Template Grab your item, 50% Big Sale Offer !!',
  },
  {
    iconName: 'icofont-twitter',
    desc: 'Somrat islam @ShopCart Hey! #HTML_Template Grab your item, 50% Big Sale Offer !!',
  },
];
const footerbottomList = [
  { text: 'Faculty', link: '#' },
  { text: 'Staff', link: '#' },
  { text: 'Students', link: '#' },
  { text: 'Alumni', link: '#' },
];

const Footer = () => {
  return (
    <footer className="style-2">
      <div className="footer-top dark-view padding-tb">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{title}</h4>
                    </div>
                    <div className="content">
                      <p>{desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
