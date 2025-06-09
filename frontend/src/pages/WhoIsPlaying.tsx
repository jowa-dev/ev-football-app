import '../components/styles/who-is-playing.css';
import { Formik, Field, Form } from 'formik';
import { Button, Card, Flex, Checkbox } from '@radix-ui/themes';

const WhoIsPlaying = () => {
  return (
    <div className="main-container">
      <div className="header">
        <h1>Who is playing?</h1>
      </div>
      <div>
        <Formik
          initialValues={{ playerName: '' }}
          onSubmit={(values) => {
            console.log('Submitted values:', values);
          }}
        >
          <Card>
            <Form className='form-container'>
              {/* <Field name="playerName">
                {({ field }: any) => (
                  <TextField.Root size="1" placeholder="Enter player name" {...field} />
                )}
              </Field> */}
              <Field>
                {({ field }: any) => (
                  <Flex gap="10px" align="center">
                    Joel Warriner
                    <Checkbox disabled defaultChecked />
                  </Flex>
                )}
              </Field>
              <Button variant="surface" color="plum">
                Next
              </Button>
            </Form>
          </Card>
        </Formik>
      </div>
    </div>
  )
};

export default WhoIsPlaying;