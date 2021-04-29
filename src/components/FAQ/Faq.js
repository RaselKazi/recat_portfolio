import React from 'react';
// import { FooterHeightContext } from '../../App';
// import BrandsTabArea from '../BrandsTabArea/BrandsTabArea';
import FaqTabArea from '../FaqTabArea/FaqTabArea';
import FooterArea from '../FooterArea/FooterArea';
// import GetInTouch from '../GetInTouch/GetInTouch';
import HeroContact from '../HeroContact/HeroContact';
// import JoinCommunity from '../JoinCommunity/JoinCommunity';
import Navbar from '../Navbar/Navbar';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const Faq = () => {

    const FaqArray ={
            title: 'FAQs'
        }
    const tabArray = [
        {
            title: 'Do I need to have a certain number of followers to join Everipost?',
            body: 'No! There is no bar.'
        },
        {
            title: 'I have less than 1000 followers, can I still join?',
            body: 'Yes! We welcome everyone, however, do note that most campaigns do require a min. of 200 followers and above.'
        },
        {
            title: 'How do I earn through Everipost?',
            body: "Once your submission has been approved, you will be required to post it on your social media and submit a link back to us for tracking! Once that's complete, you'll be able to see your earnings as we track. Your earnings will depend on the amount of likes, tags, shares and comments your posts receives."
        },
        {
            title: 'How much can I earn per post?',
            body: "You may earn an average of INR300-INR3000 per campaign depending on the payout structure of each campaign, this can be viewed in the app. The more engagements (likes, comments, tags, shares) your post receives, the more you earn!",
            body2: "*Do note that should the campaign budget run out before the end of the campaign duration, you will receive the amount you have earned up to the day the budget runs out."
        },
        {
            title: 'I do not want to participate in all the campaigns. Simply the ones I like. Can I still try Everipost?',
            body: "We encourage our users to only join the campaigns that they are truly interested in so that the content is genuine and authentic. Feel free to browse the app with no obligations."
        },
        {
            title: 'How do I know what to submit for a campaign?',
            body: "Detailed instructions for each campaign can be viewed through the app."
        },
        {
            title: 'How do I receive payment?',
            body: "Do ensure to set up your wallet with your bank account details. Your payout will be reflected in your wallet and it can be securely transferred directly to your bank account upon withdrawal.",
            body2: "*Do note that the min. withdrawal amount is INR 50 and withdrawals are subjected to a 5% transaction fee."
        },
        {
            title: 'How do I know if my post has been accepted or rejected?',
            body: "You will be notified through your in-app notification and via email too. You can also view your submission status via the app!",
            body2: "*Do ensure you've allowed  Everipost to push notifications on your mobile settings! **Brands do have up to 7 working days to approve/reject your submission."
        }
    ]
    return (
        <div>
            <Navbar />
            <HeroContact title={FaqArray}/>
            <FaqTabArea tabArray={tabArray} />
            {/* <BrandsTabArea tabArray={tabArray} mB={mB} /> */}
            {/* <GetInTouch />
            <JoinCommunity /> */}
            <FooterArea />
            <ScrollToTop />
        </div>
    );
};

export default Faq;