import '../components/styles/who-is-playing.css';
import { Formik, Field, Form } from 'formik';
import { Button } from '@radix-ui/themes';

const WhoIsPlaying = () => {
  return (
    <div className="main-container">
      <div className="header">
        <h1>Who is playing?</h1>
        <Button variant="surface" color="purple">
          Hello
        </Button>
      </div>
      <div className="form-container">
        <Formik
          initialValues={{ playerName: '' }}
          onSubmit={(values) => {
            console.log('Submitted values:', values);
          }}
        >
          <Form>

          </Form>
        </Formik>
      </div>
    </div>
  )
};

export default WhoIsPlaying;