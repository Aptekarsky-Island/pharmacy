import MainIcon from '../../assets/icons/categories_icons/mainIcon.svg?react';
import './MainLogo.css';

const MainLogo = ({width, height}) => {
    return <MainIcon  style={{ 
        width: width,
        height: height,
      }} className="mainLogo"/>;
}

export default MainLogo;