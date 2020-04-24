import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { englishConstants, japaneseConstants, ENG } from '../constants';
import { ChangingImage } from '../components';

export interface MainPageProps {
    language: 'ENG' | 'JPN';
}

export const MainPage = (props: MainPageProps) => {
    const { language } = props;
    const constants = language === ENG ? englishConstants : japaneseConstants;
    return (
        <div className={'main-page'}>
            <div className={'left-content'}>
                <ChangingImage />
            </div>
            <div className={'right-content'}>
                <h1>{constants.myName}</h1>
                <div className='icon-bar'>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size={'2x'}/> 
                    <FontAwesomeIcon icon={['fab', 'github']} size={'2x'} />
                </div>
                <div className={'content'}>
                    {constants.content}
                </div>
            </div>
        </div>
    );
}