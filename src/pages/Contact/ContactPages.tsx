import { Button, Container, Form } from "react-bootstrap";
import "./ContactPages.scss";

export default function ContactPages() {
  return (
    <>
      <div className="contact">
        <h1>
          Get <span className="text-primary">In</span> Touch
        </h1>
        <Container>
          <div className="form-card">
            <h3>Hire <span className="text-primary">Me!</span></h3>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name..." />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter your subject..." />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email..." />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Yout Message</Form.Label>
                <Form.Control type="text" as="textarea" rows={3} placeholder="Enter your message..." />
              </Form.Group>
              <Button variant="outline-primary" className="w-100">Submit</Button>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
}
