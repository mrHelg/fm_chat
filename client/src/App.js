import { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as chatActionsCreators from './actions/actionCreators';

function App() {
  const { isFeching, error, messages } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const { getMessageRequest, createMessageRequest } = bindActionCreators(
    chatActionsCreators,
    dispatch
  );
  useEffect(() => {
    getMessageRequest();
  }, []);
  return (
    <div>
      <Formik
        onSubmit={(values, formikBag) => {
          createMessageRequest(values);
          formikBag.resetForm();
        }}
        initialValues={{ author: '', text: '' }}
      >
        <Form>
          <Field name="author" placeholder="author" />
          <Field name="text" placeholder="text" />
          <button type="submit">send</button>
        </Form>
      </Formik>
      <h2>List of messages</h2>
      <ul>
        {isFeching && <li>load...</li>}
        {error && <li>error</li>}
        {messages && messages.map((msg) => <li key={msg._id}>{msg.text}</li>)}
      </ul>

    </div>
  );
}

export default App;
