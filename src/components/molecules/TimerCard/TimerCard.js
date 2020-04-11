import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
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
      justify-content: space-between;
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
  /* border: 2px solid ${({ active }) => (active ? 'green' : 'red')}; */
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
  opacity: ${({ record }) => (record ? 0 : 1)};

  ${({ active }) =>
    active &&
    css`
      animation-name: ${record};
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
    `};
`;

class TimerCard extends React.Component {
  state = {
    time: 0,
    active: true,
  };

  componentDidMount() {
    const { content } = this.props;
    this.setState({
      time: content,
    });
  }

  getTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${hours > 9 ? hours : `0${hours}`}:${
      minutes > 9 ? minutes : `0${minutes}`
    }:${seconds > 9 ? seconds : `0${seconds}`}`;
  };

  render() {
    const { pageContext, title, created, id, removeItem } = this.props;

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
              <StyledButton icon={dotIcon} active={this.state.active} record />
              <StyledButton icon={startIcon} />
              <StyledButton icon={stopIcon} />
            </StyledPanel>
          </TimePanel>

          <Button
            activeColor={pageContext}
            onClick={() => removeItem(pageContext, id)}
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
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
  };
};

export default connect(null, mapDispatchToProps)(withContext(TimerCard));
