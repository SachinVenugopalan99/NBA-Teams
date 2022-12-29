import React, { useRef } from 'react';
import { useOutsideClick } from '../../../utils/custom-hooks';
import closeIcon from '../../../assets/closeIcon.png';
import PropTypes from 'prop-types';
import './styles.scss';

const Popup = (props) => {

    const { onClose, selectedTeam, setSelectedTeam } = props;

    const popupRef = useRef();
    useOutsideClick(popupRef, () => {
        onClose();
        setSelectedTeam([]);
    });

  return (
    <>
    <div className='overlay' />
    <div className='dialogWrapper'>
        <div className='dialog' ref={popupRef}>
        <div className='topWrapper'>
          <div className='teamName'>
          {selectedTeam?.full_name}
          </div>
          <div
          onClick={() => {
            onClose();
            setSelectedTeam([]);
        }}
          >
          <img 
          src={closeIcon}
          className='close'
          />
          </div>
        </div>
        <div className='detailsWrapper'>
        <section>
            <tr className='row'>
                <th>Team Full Name</th>
                <th>{selectedTeam?.full_name}</th>
            </tr>
            <tr className='row'>
                <th>Total Games in 2021</th>
                <th>--</th>
            </tr>
        </section>
        <section className='sectionWrapper'>
            <tr className='row'>
                <th>Random Game Details:</th>
                <th></th>
            </tr>
            <tr className='row'>
                <th>Date</th>
                <th>--</th>
            </tr>
            <tr className='row'>
                <th>Home Team</th>
                <th>{selectedTeam?.full_name}</th>
            </tr>
            <tr className='row'>
                <th>Home Team Score</th>
                <th>--</th>
            </tr>
            <tr className='row'>
                <th>Visitor Team</th>
                <th>--</th>
            </tr>
            <tr className='row'>
                <th>Visitor Team Score</th>
                <th>--</th>
            </tr>
        </section>
        </div>
        </div>
    </div>
    </>
  )
};
Popup.propTypes = {
    selectedTeam: PropTypes.string,
    onClose: PropTypes.func,
    setSelectedTeam: PropTypes.func
  };
  
  Popup.defaultProps = {
    selectedTeam: '',
    onClose: () => null,
    setSelectedTeam: () => null
  };

export default Popup;
