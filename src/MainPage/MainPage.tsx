import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { englishConstants, japaneseConstants, ENG } from '../constants';
import { ChangingImage } from '../components';

export const MainPage = () => {
    const [language, setLanguage] = React.useState<'ENG' | 'JPN'>(ENG);
    const isEnglish = language === ENG;
    const constants = isEnglish ? englishConstants : japaneseConstants;
    return (
        <div className='main-page'>
            <div className='left-content'>
                <ChangingImage />
            </div>
            <div className='right-content'>
                <div className='icon-bar'>
                    <a href='https://www.linkedin.com/in/margaret-jennings-237626106'><FontAwesomeIcon icon={['fab', 'linkedin']} size={'2x'} className='icon'/></a>
                    <a href='https://github.com/mmjenjen'><FontAwesomeIcon icon={['fab', 'github']} size={'2x'} className='icon'/></a>
                    <FontAwesomeIcon icon='language' size={'2x'} className='icon' onClick={() => { isEnglish ? setLanguage('JPN') : setLanguage(ENG); }}/>
                    <span className='language-label'>{isEnglish ? '日本語' : ENG}</span>
                </div>
                <h1 className='title'>{constants.myName}</h1>
                <div className='content'>
                    {constants.content}
                </div>
            </div>
        </div>
    );
}