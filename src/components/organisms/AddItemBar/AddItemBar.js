import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import Header from 'components/atoms/Header/Header';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StyledWrapper = styled.div`
  position: fixed;
  background: white;
  top: 0;
  right: 0;
  width: 650px;
  height: 100vh;
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: 50px 50px;
  border-left: 10px solid ${({ theme, activeColor }) => theme[activeColor]};
  box-shadow: 0 0 10px 2px;
  transition: transform 0.3s ease-in-out;
  transform: translatex(${({ isActive }) => (isActive ? '0' : '100%')});

  @media (max-width: 640px) {
    width: 90%;
    height: calc(100vh - 70px);
    padding: 20px 20px;
    border-bottom: 10px solid ${({ theme, activeColor }) => theme[activeColor]};
  }
`;

const StyledTextArea = styled(Input)`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.lightgrey};
  border: none;
  height: 300px;
`;

const StyledHeader = styled(Header)`
  width: 400px;
`;

const StyledInput = styled(Input)`
  background-color: ${({ theme }) => theme.lightgrey};
  border: none;
  margin-top: 10px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledErrorDiv = styled.div`
  color: red;
  margin-bottom: 10px;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  margin-bottom: 10px;
  padding: 5px 5px 5px 10px;
  border-radius: 5px;
  border: none;
  background: ${({ theme }) => theme.lightgrey};
  cursor: pointer;
`;

const AddItemBar = ({ pageContext, isActive, addItem, clickAction }) => {
  return (
    <StyledWrapper activeColor={pageContext} isActive={isActive}>
      <StyledHeader>Add new {pageContext}</StyledHeader>
      <Formik
        initialValues={{
          title: '',
          content: '',
          time: 0,
          deadline: new Date(),
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .min(3, 'Must be 3 characters or more')
            .required('Required'),

          content: Yup.string().min(1, 'Must be 1 character or more'),
          // .required('Required'),
        })}
        onSubmit={(values, { resetForm }) => {
          addItem(pageContext, values);
          clickAction();
          resetForm();
        }}
      >
        {({ values, errors, handleChange, handleBlur, setFieldValue }) => (
          <StyledForm>
            <StyledInput
              type="text"
              id="title"
              name="title"
              placeholder={
                pageContext === 'bookmarks'
                  ? 'website url ex. www.google.pl '
                  : 'title'
              }
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />

            {errors.title ? (
              <StyledErrorDiv>{errors.title}</StyledErrorDiv>
            ) : null}

            {pageContext === 'todos' ? (
              <StyledDatePicker
                id="deadline"
                name="deadline"
                dateFormat="MMMM d yyyy"
                selected={values.deadline}
                onChange={(date) => {
                  setFieldValue('deadline', date);
                }}
              />
            ) : null}

            {pageContext === 'timers' ? null : (
              <StyledTextArea
                as="textarea"
                placeholder="description"
                name="content"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
              />
            )}

            {errors.content ? (
              <StyledErrorDiv>{errors.content}</StyledErrorDiv>
            ) : null}

            <Button type="submit" activeColor={pageContext}>
              Add
            </Button>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

AddItemBar.propTypes = {
  pageContext: PropTypes.string.isRequired,
  isActive: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  clickAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (itemType, itemContent) =>
      dispatch(addItemAction(itemType, itemContent)),
  };
};

export default connect(null, mapDispatchToProps)(withContext(AddItemBar));
