import React from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import { Container } from '@roxie/components';

export function FormExample() {
  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">Kitchen Sink</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components">Components</Link></li>
      <li className="breadcrumb-item">Forms</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
        <LoginForm />
        <ContactForm />
        <RegisterForm />
      </div>
    </Container>
  </Container>
}

function LoginForm() {
  return <div className="card mb-3">
    <div className="card-header">Login Form</div>
    <div className="card-body">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <div className="card">
              <div className="card-header">Login</div>
              <div className="card-body">
                <div className="form-group row mb-1">
                  <label className="col-4 col-form-label">User ID:</label>
                  <div className="col-8">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="form-group row mb-1">
                  <label className="col-4 col-form-label">Password:</label>
                  <div className="col-8">
                    <input type="password" className="form-control" />
                  </div>
                </div>
                <div className="form-group row mb-1">
                  <div className="col-8 offset-4">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label className="form-check-label">Remember me</label>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <button type="button" className="btn btn-default mr-1">Register</button>
                  <button type="button" className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card-footer">
      <Highlight language="html">{`
<div class="container">
  <div class="row justify-content-center">
    <div class="col-4">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <div class="form-group row mb-1">
            <label class="col-4 col-form-label">User ID:</label>
            <div class="col-8">
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="form-group row mb-1">
            <label class="col-4 col-form-label">Password:</label>
            <div class="col-8">
              <input type="password" class="form-control" />
            </div>
          </div>
          <div class="form-group row mb-1">
            <div class="col-8 offset-4">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" />
                <label class="form-check-label">Remember me</label>
              </div>
            </div>
          </div>
          <div class="text-right">
            <button type="button" class="btn btn-default mr-1">Register</button>
            <button type="button" class="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      `}</Highlight>
    </div>
  </div>
}

function ContactForm() {
  return <div className="card mb-3">
    <div className="card-header">Contact Form</div>
    <div className="card-body">
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="card">
              <div className="card-header">Contact</div>
              <div className="card-body text-center">
                <p>
                  Thank you for visiting our site! We welcome your feedback;
                  please click the button below to send us a message.
                  We will respond to your inquiry as quickly as possible.
                </p>
                <button type="button" className="btn btn-default" data-toggle="modal" data-target="#contact-dialog">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact-dialog" className="modal fade" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Contact Us</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form noValidate>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group mb-1">
                      <label>First Name:<span className="text-danger">*</span></label>
                      <input type="text" className="form-control" required />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group mb-1">
                      <label>Last Name:<span className="text-danger">*</span></label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-1">
                  <label>Your Email Address:<span className="text-danger">*</span></label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-1">
                  <label>Subject:<span className="text-danger">*</span></label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group mb-1">
                  <label>Message:<span className="text-danger">*</span></label>
                  <textarea className="form-control" rows={6} />
                </div>
                <div className="text-right">
                  <button type="button" className="btn btn-default mr-1" data-dismiss="modal">Cancel</button>
                  <button type="submit" className="btn btn-primary">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="card-footer">
      <Highlight language="html">{`
<section class="container">
  <div class="row justify-content-center">
    <div class="col-6">
      <div class="card">
        <div class="card-header">Contact</div>
        <div class="card-body text-center">
          <p>
            Thank you for visiting our site! We welcome your feedback;
            please click the button below to send us a message.
            We will respond to your inquiry as quickly as possible.
          </p>
          <button type="button" class="btn btn-default" data-toggle="modal" data-target="#contact-dialog">Contact Us</button>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="contact-dialog" class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Contact Us</h5>
        <button type="button" class="close" data-dismiss="modal">
          <span>&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-6">
            <div class="form-group mb-1">
              <label>First Name:<span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group mb-1">
              <label>Last Name:<span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
          </div>
        </div>
        <div class="form-group mb-1">
          <label>Your Email Address:<span class="text-danger">*</span></label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group mb-1">
          <label>Subject:<span class="text-danger">*</span></label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group mb-1">
          <label>Message:<span class="text-danger">*</span></label>
          <textarea class="form-control" rows="6" />
        </div>
        <div class="text-right">
          <button type="button" class="btn btn-default mr-1">Cancel</button>
          <button type="button" class="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  </div>
</section>
      `}</Highlight>
    </div>
  </div>
}

function RegisterForm() {
  return <div className="card mb-3">
    <div className="card-header">Register Form</div>
    <div className="card-body">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <div className="card">
              <div className="card-header">Register</div>
              <div className="card-body">
                <fieldset className="mb-1">
                  <legend>User Info</legend>
                  <div className="form-group row mb-1">
                    <label className="col-4 col-form-label text-right pr-0">User ID:</label>
                    <div className="col-8">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row mb-1">
                    <label className="col-4 col-form-label text-right pr-0">Password:</label>
                    <div className="col-8">
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row mb-1">
                    <label className="col-4 col-form-label text-right pr-0">Verify:</label>
                    <div className="col-8">
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                </fieldset>
                <fieldset className="mb-1">
                  <legend>Contact Information</legend>
                  <div className="form-group row mb-1">
                    <label className="col-4 col-form-label text-right pr-0">First Name:</label>
                    <div className="col-8">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row mb-1">
                    <label className="col-4 col-form-label text-right pr-0">Last Name:</label>
                    <div className="col-8">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row mb-1">
                    <label className="col-4 col-form-label text-right pr-0">Company:</label>
                    <div className="col-8">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row mb-1">
                    <label className="col-4 col-form-label text-right pr-0">Email:</label>
                    <div className="col-8">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </fieldset>
                <div className="text-right">
                  <button type="button" className="btn btn-primary">Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card-footer">
      <Highlight language="html">{`
<div class="container">
  <div class="row justify-content-center">
    <div class="col-4">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <div class="form-group row mb-1">
            <label class="col-4 col-form-label">User ID:</label>
            <div class="col-8">
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="form-group row mb-1">
            <label class="col-4 col-form-label">Password:</label>
            <div class="col-8">
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="form-group row mb-1">
            <div class="col-8 offset-4">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" />
                <label class="form-check-label">Remember me</label>
              </div>
            </div>
          </div>
          <div class="form-group row mb-0">
            <div class="col-12 d-flex justify-content-end">
              <button type="button" class="btn btn-default mr-1">Register</button>
              <button type="button" class="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      `}</Highlight>
    </div>
  </div>
}