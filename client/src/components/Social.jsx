import React from 'react';

const Social = () => {
    //logic for Social
    //social media icons are dumb.. there will be no logic here.
    //we are just going to send them to the corresponding website.

    return (
        <div className={'social-media'}>
            <a href='mailto:gammazon@gmail.com'>Share</a>
            <a href="mailto:gammazon@gmail.com"><div id={'mail-share'} className={'social-media-icon'}></div></a>
            <a href="https://www.facebook.com"><div id={'facebook-share'} className={'social-media-icon'}></div></a>
            <a href="https://www.twitter.com"><div id={'twitter-share'} className={'social-media-icon'}></div></a>
            <a href="https://www.pinterest.com"><div id={'pinterest-share'} className={'social-media-icon'}></div></a>
        </div>
)
};

export default Social;