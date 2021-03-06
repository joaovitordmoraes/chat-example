import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

function Chat({ initialValues, handleSubmit }) {
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => {
        <Form>
          <div className="form-group">
            <Field name="user" placeholder="User" type="text" />
          </div>

          <div className="form-group">
            <Field name="city" placeholder="Cidade" type="text" />
            <Field name="state" placeholder="Estado" type="text" />
          </div>

          <div className="form-group">
            <Field name="birth" placeholder="Digite sua data de nascimento" type="date" />
          </div>

          <div className="form-group">
            <Field name="email" placeholder="Digite seu e-mail" type="email" />
          </div>

          <button type="submit">Salvar</button>
        </Form>
      }}
    </Formik>
  );
}

Chat.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default Chat;