import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import emoIcon from '../../../../public/Images/icon.png';
const Chatbot = () => {
    const steps = [
        {
            id: '0',
            message: 'hi!',
    
            // This calls the next id
            // i.e. id 1 in this case
            trigger: '1',
        }, {
            id: '1',
    
            // This message appears in
            // the bot chat bubble
            message: 'Please write your name',
            trigger: '2'
        }, {
            id: '2',
    
            // Here we want the user
            // to enter input
            user: true,
            trigger: '3',
        }, {
            id: '3',
            message: " hi {previousValue}, how can I help you?",
            trigger: '4'
        }, {
            id: '4',
            options: [
    
                // When we need to show a number of
                // options to choose we create alist
                // like this
                { value: 1, label: 'View Services' },
                { value: 2, label: 'Read Membership' },
    
            ],
            end: true
        }
    ];
    
    // Creating our own theme
    const theme = {
        background: '#C9FF8F',
        headerBgColor: '#8bd833',
        headerFontSize: '20px',
        botBubbleColor: '#7EA254',
        headerFontColor: 'white',
        botFontColor: 'white',
        userBubbleColor: '#FF5733',
        userFontColor: 'white',
    };
    
    // Set some properties of the bot
    const config = {
        botAvatar: emoIcon,
        floating: true,
    };

    return (
        <div className="">
        <ThemeProvider theme={theme}>
            <ChatBot

                // This appears as the header
                // text for the chat bot
                headerTitle="Let's Chat"
                steps={steps}
                {...config}

            />
        </ThemeProvider>
    </div>
    );
};

export default Chatbot;