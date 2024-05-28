/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal, Button } from "react-bootstrap";

interface IEmailSuccessfully {
  show: boolean;
  setShow: any;
}

export default function EmailSuccessfully({
  show,
  setShow,
}: IEmailSuccessfully) {
  return (
    <div>
      <Modal
        show={show}
        // onHide={setShow}
        backdrop="static"
        centered
        keyboard={false}
      >
        <Modal.Body
          style={{ backgroundColor: "var(--secondary)" }}
          className="rounded text-center"
        >
            <h2 className="text-primary">Thank You!</h2>
          <img
            src="/illustration/emailSuccessfully.png"
            className="img-fluid"
            alt=""
          />
          <p>Your message has been successfully sent. I will contact you soon.</p>

          <div className="d-flex justify-content-center">
            <Button variant="outline-primary" className="py-2" onClick={() => setShow(!show)}>
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
