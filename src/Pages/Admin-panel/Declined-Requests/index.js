import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios';
import { DECLINED_REQUESTS_API,UPDATE_REQUESTS_API } from '../../../Apis/apis';
import './declinedRequests.css'
import Loader from '../../../Loader';

const DeclinedRequests = () => {
  const [declinedRequests, setDeclinedRequests] = useState([]);
  const [loading,setLoading]=useState(true)
  var shouldLog=useRef(true);

  useEffect(() => {
    if(shouldLog.current){
      shouldLog=false;
    const token=JSON.parse(localStorage.getItem('data')).token;
    // console.log(token)
    axios
    .get(DECLINED_REQUESTS_API, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      setDeclinedRequests(response.data.data.Examiners);
      setLoading(false)
      console.log(response.data.data.Examiners);
    })
    .catch((error) => {
      console.log(error);
    });
  }
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
    let newData=declinedRequests.filter(x=>x._id !== id);
    setDeclinedRequests(newData)
    })
    .catch((error) => {
      console.log(error);
    });
  }
//   useEffect(()=>{
//     handleAction();
//  });


  return (
    <section className='declined-requests-page my-3'>
      {loading?<Loader/>:
      <>
       {declinedRequests.length>0?
        <>
        <h2>Declined Request :</h2>
        {declinedRequests.map((req) => {
          return (
        <div key={req._id} className="content-box p-2 my-2" >
        <div className="row">
         <div className="col-md-8 requests-left-content">
         <div className="row">
                <div className="col-md-6">
                <div className="reqData">{req.firstName} {req.lastName}</div>
                </div>
              <div className="col-md-6">
                <div className="reqData">{req.email}</div>
                </div>
            </div>
         </div>
         <div className="col-md-4 d-flex requests-right-content">
             <div><button className='btn approveButton' onClick={()=>handleAction(req._id,'APPROVED')}>Approve</button></div>
             <div><button className='btn btn deleteButton' onClick={()=>handleAction(req._id,'DELETED')}>Delete</button></div>
         </div>
        </div>
     </div>
          );
        })}
</>
:
      <h2>No Declined Accounts</h2>
      }
</> }
    </section>
  )
}

export default DeclinedRequests