/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Container, Form, Spinner } from "react-bootstrap";
import "./ContactPages.scss";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import EmailSuccessfully from "../../components/EmailSuccessfully";

export default function ContactPages() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_t07jwgc",
        "template_v506q3s",
        formData,
        "iteZwddyw5EKZ9prq"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        // alert("Email sent successfully!");
        setLoading(false);
        setShow(true);
        setFormData({
          name: "",
          subject: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("Sorry, an error occurred while sending your message. Please try again later.");
      });
  };
  return (
    <>
      <div className="contact">
        {show && <EmailSuccessfully show={show} setShow={setShow} />}
        <h1>
          Get <span className="text-primary">In</span> Touch
        </h1>
        <Container>
          <div className="form-card">
            <h3>
              Hire <span className="text-primary">Me!</span>
            </h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name..."
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter your subject..."
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email..."
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Yout Message</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message..."
                />
              </Form.Group>
              <Button type="submit" variant="outline-primary" className="w-100">
                {loading ? (
                  <Spinner animation="border" />
                ) : (
                  "Submit"
                )}
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
}
