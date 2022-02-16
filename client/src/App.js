import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as chatActionsCreators from './actions/actionCreatos';

function App() {
  const { isFeching, error, messages } = useSelector((chat) => state.chat);
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
          formikBag.resetForm();
        }}
        initialValues={{ author: '', text: '' }}
      >
        <Form>
          <Field>name='author' placeholder = 'author' /</Field>
          <Field name="text" placeholder="text" />
          <button type="submit">send</button>
        </Form>
      </Formik>
      <h2>List of messages</h2>
      <ul>
        {isFeching && <li>load...</li>}
        {messages.map((msg) => (
          <li key={msg._id}>{msg.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
