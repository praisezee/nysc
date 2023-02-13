import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import graduate from '../../img/graduate.png'


const ForeginModal=()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      
    <>
      <article className="p-2 col-6  col-lg-3 text-center expand-out" role='button'  onClick={handleShow}>
          <div className="shadow border rounded p-1 my-2">
          <p className="text-center h6 text-capitalize mx-auto  my-2">Foreign <abbr title="Prospective Corp Member">P.C.M</abbr> Requirement</p>
          <hr className='opacity-50 mx-auto w-50'/>
          <img src={graduate} alt="" className='img-fluid mx-auto my-3 '/>
          </div>
        </article> 

      <Modal show={show} onHide={handleClose} centered scrollable>
        <Modal.Header closeButton>
        <Modal.Title>
        Requirements For Registration Of Nigerian Foreign-Trained Graduates
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ol>
              <li>
                <p className="text-primary h5 text-uppercase bg-secondary bg-opacity-25 border rounded my-2 ps-3">ACADEMIC QUALIFICATION</p>
                <p>The Originals and photocopies of the following documents are required for registration and mobilization of foreign-trained graduates into the National Youth Service Corps (please note that downloaded Certificates/Transcripts, Statement of result and Attestation letters are not acceptable); viz:</p>
                <ul className='my-list'>
                  <li>First university degree or HND certificate</li>
                  <li>Complete official transcription of the First Degree or HND course</li>
                  <li>Mark sheet (for Indian universities only)</li>
                  <li>O’level certificate i.e WASC, GCE, SSCE, NECO, IGCE ,GCSE, high school diploma for those schooled in USA e.t.c <br />
                    <strong className='text-danger'>Note that online result print-out is not acceptable in place of the original</strong>
                  </li>
                  <li>Candidates must obtain credit in not less than five(5) subjects (including English and mathematics) in not less than two(2) sittings</li>
                  <li>Please note that persons who did a 'Top up' programme/Course are required to upload their foundation Certificate e.g APTECH, OND, NIIT, INFORMATICTS etc</li>
                  <li>Medical doctors and optometrists are required to produce in addition, evidence of completion of housemanship, registration certificate with the medical and dental council of Nigeria/Optometrists Association of Nigeria as applicable</li>
                  <li>Pharmacists shall produce in addition, evidence of completion of internship and registration certificate with Pharmacists council of Nigeria</li>
                  <li>Nurses are to present original Licence and Certificate of registration with the Nursing/Midwifery council of Nigeria</li>
                  <li>Medical Laboratory Scientists are also to present their Licence and certificate of registration with Medical laboratory scientists Council of Nigeria</li>
                </ul>
              </li>
              <hr className="w-100 opacity-100 mx-auto" />
              <li>
                <p className="text-primary h5 text-uppercase bg-secondary bg-opacity-25 border rounded my-2 ps-3">TRAVEL DOCUMENT: NIGERIAN INTERNATIONAL PASSPORT SHOWING CLEARLY:</p>
                <ul className="my-list">
                  <li>Entry visa to the country of study</li>
                  <li>First Departure Date from Nigeria</li>
                  <li>Date of return to Nigeria after the period of study</li>
                  <li>Date page of the passport</li>
                  <li>Graduates with dual nationality are required to Up-load Data pages of both International Passports and present the Passport for verification at the Camp (where more than one international Passports were used during the period of study, candidates should upload Data Pages of the International Passports</li>
                  <li>Residence Permit (for Graduates from Institutions located within West African Countries Only)</li>
                </ul>
              </li>
              <hr className="w-100 opacity-100 mx-auto" />
              <li>
                <p className="text-primary h5 text-uppercase bg-secondary bg-opacity-25 border rounded my-2 ps-3">LOSS OF INTERNATIONAL PASSPORT</p>
                <p>In the event of loss of international passport, a prospective Corps Member is expected to obtain the following:</p>
                <ul className="my-list">
                  <li>Police and Immigration reports from the country where the Passport got missing</li>
                  <li>Sworn affidavit</li>
                  <li>Evidence of stay in country of study and a New International Passport</li>
                  <li>Personal Data page of the newly obtained International Passport must be uploaded</li>
                </ul>
              </li>
              <hr className="w-100 opacity-100 mx-auto" />
              <li>
                <p className="text-primary h5 text-uppercase bg-secondary bg-opacity-25 border rounded my-2 ps-3">LOSS OF ACADEMIC CREDENTIALS: For loss of academic credentials, the following are required:</p>
                <ul className="my-list">
                  <li>Police Report</li>
                  <li>Sworn Affidavit</li>
                  <li>Confirmation of result either the examination body (for loss of O'level certificate) or the institution of graduation(for loss of degree, HND, certificates as the case may be)</li>
                </ul>
              </li>
              <hr className="w-100 opacity-100 mx-auto" />
              <li>
                <p className="text-primary h5 text-uppercase bg-secondary bg-opacity-25 border rounded my-2 ps-3">Certificates not written in English Language must be translated at the Embassy of the country of study or a University in Nigeria where the language is studied, before presentation to the NYSC.</p>
              </li>
              <hr className="w-100 opacity-100 mx-auto" />
              <li>
                <p className="text-primary h5 text-uppercase bg-secondary bg-opacity-25 border rounded my-2 ps-3">Special Note:</p>
                <ul className="my-list">
                  <li>Holders of Diploma of Higher Education and Higher Certificate of Education are not qualified for mobilization. Therefore, they need not register</li>
                  <li>Attestation Letter, Letter of completion of course To Whom It May Concern letter or any related document is not acceptable in lieu of Degree or HND Certificate, Please</li>
                  <li>Statements of Results are also not acceptable in lieu of any certificate</li>
                  <li>Please note that NYSC Management reserves the right to refer to Federal Ministry of Education for Verification, any institution or document which status is questionable</li>
                  <li>Married women would be deployed to the State where their husbands are domiciled, provided their marriage certificates, Husband’s Identification, e.g. Drivers License, International Passport, National ID Card and evidences of change of name are Uploaded/Presented</li>
                  <li>Physical verification of all credentials uploaded by foreign Graduates will take place at the Orientation Camp</li>
                  <li>Foreign Trained Corps Members should not send their credentials home after preliminary registration in the Camp until the credentials are physically verified by duly assigned officer(s) from National Youth Service Corps, National Directorate Headquarters Abuja. Foreign trained Corps Members should also remain in the camp until their credentials are physically verified</li>
                  <li>Any Foreign trained Corps Member who is relocated must show evidence of physical verification of his/her credentials before he/she is registered in the state of relocation</li>
                  <li>Oxford Brookes, Professional Certificates, Correspondence Courses and Certificates through online courses are not acceptable</li>
                  <li>Scanned, online print out or photocopies of Credentials are not acceptable</li>
                  <li>Foreign graduates who are Exempted from Service must present all academic credentials and International Passport uploaded for physical verification at the Evaluation Division, Corps Mobilization Department, National youth Service Corps, National Directorate Headquarters, Abuja before Exemption Certificate is issued</li>
                  <li>Foreign graduates who are excluded from Service must also present all academic credentials and International Passport uploaded for physical verification at the Evaluation Division, Corps Mobilization Department, National Youth Service Corps, National Directorate Headquarters, Abuja before Exclusion Letter is printed online</li>
                  <li>Thank You</li>
                </ul>
              </li>
            </ol>
            </Modal.Body>
        <Modal.Footer>
        <button type="button" className="btn btn-success" onClick={handleClose} >Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ForeginModal;