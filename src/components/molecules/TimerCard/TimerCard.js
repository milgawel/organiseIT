import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  removeItem as removeItemAction,
  modifyItem as modifyItemAction,
} from 'actions';
import withContext from 'hoc/withContext';
import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import timerIcon from 'assets/timer.png';
import startIcon from 'assets/play.png';
import stopIcon from 'assets/stop.png';
import dotIcon from 'assets/dot.png';

const CardWrapper = styled.div`
  max-height: 360px;
  box-shadow: 0px 0px 10px 2px black;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.2fr 1fr;
`;

const CardContent = styled.div`
  padding: 15px 15px;
  background-color: white;
  position: relative;
  max-height: 280px;

  ${({ heading }) =>
    heading &&
    css`
    background-color: ${({ theme, activeColor }) => theme[activeColor]}};
    color:${({ activeColor }) =>
      activeColor === 'notes' ? 'white' : 'black'}};
  `}

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-time: space-between;
    `}
`;

const Icon = styled.img`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 40px;
  height: 40px;
  top: 0;
  right: 0;
  transform: translate(-50%, 40%);
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.l};
  width: 65%;
  height: 40px;
  line-height: 40px;
`;

const StyledPanel = styled.div`
  width: 35%;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const TimePanel = styled.div`
  display: flex;
  flex-direction: row;
  height: 45px;
`;

const record = keyframes`
 0% {
    opacity: 0.0;
  }

  50% {
    opacity: 0.8;
  }

  100% {
    opacity: 0.0;
  }

`;

const StyledButton = styled.button`
  margin-top: 7.5px;
  width: 25px;
  height: 25px;

  background: url(${({ icon }) => icon});
  background-size: 100%;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  opacity: ${({ recording }) => (recording ? 0 : 1)};
  outline: none;
  transition: all 0.2s ease-in-out;
  ${({ active }) =>
    active &&
    css`
      animation-name: ${record};
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
    `};

  &:hover {
    transform: scale(1.15);
  }
`;

class TimerCard extends React.Component {
  state = {
    time: '',
    active: false,
  };

  componentDidMount() {
    const { time } = this.props;
    console.log(`time time time timetteteetetet ${time}`);
    this.setState({
      time,
    });
  }

  componentDidUpdate() {
    if (this.state.active) {
      document.title = `recording:  ${this.getTime(this.state.time)}`;
    }
  }

  // componentWillUnmount() {
  //   const { time, title } = this.props;
  //   console.log(`unmounted title ${title}`);
  //   console.log(`unmounted title ${time}`);
  //   this.setState({
  //     time: '',
  //   });
  //   console.log(`unmounted console log ${this.props.time}`);
  // }

  getTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${hours > 9 ? hours : `0${hours}`}:${
      minutes > 9 ? minutes : `0${minutes}`
    }:${seconds > 9 ? seconds : `0${seconds}`}`;
  };

  timerStop = () => {
    clearInterval(this.timer);
    console.log(this.state.time);
    this.setState({
      active: false,
    });
  };

  timerStart = () => {
    if (this.state.active === false) {
      this.setState({
        active: true,
      });
      this.timer = setInterval(() => {
        console.log(this.state.time);
        this.setState((prevState) => ({
          time: prevState.time + 1,
        }));
        this.time = +1;
      }, 1000);
    } else if (this.state.active) {
      return alert('timer is started');
    }
  };

  render() {
    const {
      pageContext,
      title,
      created,
      id,
      time,
      removeItem,
      modifyItem,
    } = this.props;

    return (
      <CardWrapper>
        <CardContent heading activeColor={pageContext}>
          <Header>{title}</Header>
          <Paragraph small>created {created}</Paragraph>
          <Icon src={timerIcon} />
        </CardContent>
        <CardContent flex>
          <TimePanel>
            <StyledParagraph>{this.getTime(this.state.time)}</StyledParagraph>

            <StyledPanel active={this.state.active}>
              <StyledButton
                icon={dotIcon}
                active={this.state.active}
                recording
              />
              <StyledButton icon={startIcon} onClick={this.timerStart} />
              <StyledButton
                icon={stopIcon}
                onClick={() => {
                  this.timerStop();
                  modifyItem(pageContext, id, this.state.time);
                  window.location.reload();
                }}
              />
            </StyledPanel>
          </TimePanel>

          <Button
            activeColor={pageContext}
            onClick={() => {
              console.log(`button onclick ${id}`);
              removeItem(pageContext, id);
            }}
          >
            Remove
          </Button>
        </CardContent>
      </CardWrapper>
    );
  }
}

TimerCard.propTypes = {
  pageContext: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
  modifyItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
    modifyItem: (itemType, id, time) =>
      dispatch(modifyItemAction(itemType, id, time)),
  };
};

export default connect(null, mapDispatchToProps)(withContext(TimerCard));
