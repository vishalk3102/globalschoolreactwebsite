import React from "react";
import "./style/Admission.css";

const Admission = () => {
  return (
    <>
      <section className="intro-section">
        <div className="container">
          <div className="row">
            <div className="intro-box col-10 mx-auto">
              <h3 style={{textAlign:"center",paddingBottom:"20px"}}>Admission Procedure</h3>
              <p>
                <li>CBSE Curriculum for class IX</li>
                <li>CBSE Curriculum for class XI</li>
                Candidates who are offered admission must avail of the offer
                within 30 days of the School having made such offer, failing
                which the offer of admission will lapse. On full payment of
                admission dues and submission of the above documents, candidates
                will receive Admission Documents, allotted an admission number
                and placed on the School rolls. Admission dues once paid will
                not, under any circumstances, be refundable.
              </p>
            </div>
            <div className="intro-box col-10 mx-auto">
              <h3 style={{fontSize:"25px"}}>Admissions in Class IX</h3>
              <p>
                Those seeking admission directly to class IX should be aware
                that, in contrast to most other schools, we offer subject
                choices at this stage. Entrance test papers are therefore
                subject specific at this level. Please refer to the paragraph on
                Academics.
              </p>
            </div>
            <div className="intro-box col-10 mx-auto">
              <h3 style={{fontSize:"25px"}}>Procedure</h3>
              <p>
                Candidates who are offered admission must avail of the offer
                within the specified time by paying the necessary admission
                dues, as defined in the current year’s Fee structure and
                returning duly signed the Indemnity Agreement (on Judicial Stamp
                Paper), the Uniform Measurement Chart and the Student’s Medical
                History form, failing which the offer of admission will lapse.
                In such a case, the school will be entitled to offer the place
                to another candidate in order of merit/position on the waiting
                list.
                <br />
                On full payment of the admission dues and submission of the
                relevant documents, candidates will be sent a set of Admission
                Documents, allotted an admission number and placed on the School
                rolls.
                <br />
                Once admitted, candidates will be subject to all the rules and
                regulations of the School. Admission dues once paid will not
                under any circumstances be refundable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Admission;
