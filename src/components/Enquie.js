import React from 'react'

const Enquie = () => {
  return (
   <>
    <div>
<div>
  <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalToggleLabel">Enquiry Form</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column'}}>
          <div className="input-tag" style={{width: '80%'}}>
            <h6>Name<span>*</span></h6>
            <input type="text" placeholder="Enter Name" required style={{width: '100%'}} />
          </div>
          <div className="input-tag" style={{width: '80%'}}>
            <h6>Contact No.<span>*</span></h6>
            <input type="number" placeholder="Enter Mobile Number" required style={{width: '100%'}} />
          </div>
          <div className="input-tag" style={{width: '80%'}}>
            <h6>Email I'd<span>*</span></h6>
            <input type="email" placeholder="user123@gmail.com" required style={{width: '100%'}} />
          </div>
          <div className="input-tag" style={{width: '80%'}}>
            <h6>Message<span>*</span></h6>
            <textarea id="textarea rows={2}" placeholder="How can i help you" required style={{height: 'auto', width: '100%'}} defaultValue={""} />
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-primary" type="submit" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal" style={{display: 'flex', alignItems: 'center', justifyContent: 'center !important'}}>SUBMIT</button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex={-1}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          Hide this modal and show the first with the button below.
        </div>
        <div className="modal-footer">
          <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
        </div>
      </div>
    </div>
  </div>
  <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a>
</div>

    </div>
   </>
  )
}

export default Enquie
