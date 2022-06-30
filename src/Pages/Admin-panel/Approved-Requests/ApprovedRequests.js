import React,{useState,useEffect} from 'react'
import { APPROVED_REQUESTS_API,UPDATE_REQUESTS_API } from '../../../Apis/apis';
import axios from 'axios';
import './approvedRequests.css'

const ApprovedRequests = () => {
  const [approvedRequests, setApprovedRequests] = useState([]);

  useEffect(() => {
    const token=JSON.parse(localStorage.getItem('data')).token;
    // console.log(token)
    axios
    .get(APPROVED_REQUESTS_API, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      setApprovedRequests(response.data.data.Examiners);
      console.log(response.data.data.Examiners);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
  const handleAction=(id,action)=>{
    const token=JSON.parse(localStorage.getItem('data')).token;
console.log(id)
   const data={
      examinerID:id,
      action:action
    }
    axios
    .post(UPDATE_REQUESTS_API,data, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      console.log(response)
    let newData=approvedRequests.filter(x=>x._id !== id);
    setApprovedRequests(newData)
    })
    .catch((error) => {
      console.log(error);
    });
  }
//   useEffect(()=>{
//     handleAction();
//  },[]);


  return (
    <section className='approved-requests-page my-3'>
      {approvedRequests.length>0?
        <>
        <h2>All Approved Request :</h2>
        {approvedRequests.map((req) => {
          return (
            <div key={req._id} className="content-box p-2 my-2" >
            <div className="row">
             <div className="col-md-6 requests-left-content">
             <div className="email">{req.email}</div>
             </div>
             <div className="col-md-6 d-flex requests-right-content">
             <div ><button className='btn declineButton' onClick={()=>handleAction(req._id,'DECLINED')}>Decline</button></div>
                 <div ><button className='btn deleteButton' onClick={()=>handleAction(req._id,'DELETED')}>Delete</button></div>
             </div>
            </div>
         </div>
          );
        })}
      </>
      :
      <h2>No Approved Accounts</h2>
}
    </section>
  )
}

export default ApprovedRequests