// eslint-disable-next-line no-unused-vars
import React from 'react';
import EventHeroSection from '../Event/EventHeroSection/EventHeroSection';
import DiscoverMoment from '../Event/DiscoverMoment/DiscoverMoment';
import EventVideo from '../Event/EventVideo/EventVideo';
import Footer from '../Shared/Footer/Footer';
import EventGalleryNonEvents from './EventGalleryNonEvents';

const NonEvents = () => {
    return (
        <div>
            <EventHeroSection></EventHeroSection>
            <EventGalleryNonEvents></EventGalleryNonEvents>
            <DiscoverMoment></DiscoverMoment>
            <EventVideo></EventVideo>
            <Footer></Footer>
        </div>
    );
};

export default NonEvents;