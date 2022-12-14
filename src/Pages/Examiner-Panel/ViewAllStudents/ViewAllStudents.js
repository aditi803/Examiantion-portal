import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { ToastContainer } from 'react-toastify';
import { VIEWALLSTUDENT_API } from '../../../Apis/apis';
import './viewAllStudents.css';
import Loader from '../../../Loader';
import { useNavigate } from 'react-router-dom';
import {IoTrashOutline} from 'react-icons/io5';
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {loaderValueTrue,loaderValueFalse } from '../../../redux/actions';
import { useSelector,useDispatch } from 'react-redux';

const ViewAllStudents = () => {
    const loadingState = useSelector((state) => state.loadingState.loading);
    const[AllStudents,setAllStudents]=useState([]);
    const[TotalPages,setTotal]=useState();
    const[pageIndex,setPageIndex]=useState(0);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const token=JSON.parse(localStorage.getItem('data')).token;
    // dispatch(loaderValueTrue());
    useEffect(()=>{
        axios.get(VIEWALLSTUDENT_API + '?&pageSize=5&pageIndex='+pageIndex,{headers:{Authorization:`Bearer ${token}`}})
        .then((res)=>{
            console.log(res.data.data.students,'new');
            setTotal(res.data.data.totalPages);
            // dispatch(loaderValueFalse());
            setAllStudents(res.data.data.students);
            console.log(AllStudents,'old');
            console.log(res.data.data.totalPages,pageIndex)
        })
        .catch((err)=>{
            console.log(err);
            // dispatch(loaderValueFalse());
        })
    },[pageIndex])

    // const AddStudent=(studentID)=>{
    //   const token=JSON.parse(localStorage.getItem('data')).token;
    //   axios.delete( ADD_STUDENT+ '/' +studentID,{headers:{Authorization:`Bearer ${token}`}})
    //   .then((res)=>{
    //     console.log(res);
    //     const newData = data.filter((x) => x._id!== studentID);
    //     setData(newData);
    //     toast.success("Student is deleted");
    //   })
    //   .catch((err)=>{
    //     console.log(err);
    //   })
    // }
    
    // let totalPages = 3;h
   
  return (
    <div>
      {loadingState?<Loader/> :
    <>
    <div className='viewStudent'>
    <div className='upperSection' align="right">
    <button type="button" align="right" className="btn btn-md CreateCourseButton" data-backdrop="false" data-toggle="modal" data-target="#exampleModal"  onClick={()=>navigate("/examinerDashboard/course")}>Create Course</button> 
    </div>
    <ToastContainer/>
    <h2>Student List</h2>
      <table className="table all-containers">
  <thead >
    <tr className='table-primary' >
      <th scope='col'>#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile No.</th>
      {/* <th scope="col">Add</th> */}
    </tr>
  </thead>
  
    {
        AllStudents.map((item,index)=>{
            return(
            
             <tbody key={index}>
                <tr >
                <td>{(5*pageIndex)+index+1}</td>
                <td>{item.firstName} {item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.mobileNumber}</td>
                {/* <td><AiOutlineUsergroupAdd onClick={()=>AddStudent(item._id)} className='AddIcon'/> </td>   */}
             
               
                </tr>
            </tbody>

                
            )
        })
    }
    
  
    </table>
    <div className='btnContainer'>
      <button className=' btn  previousButton' onClick={()=>{if(pageIndex > 0){setPageIndex(pageIndex - 1)}
      else{
        alert("no more records");
      }
      }}>Previous </button>
      <button className=' btn  nextButton' onClick={()=>{
        if(pageIndex + 1 < TotalPages){setPageIndex(pageIndex + 1)}
        else{
        alert("no more records");
      }
        }}>Next</button>
     </div>

    </div>
    
    </>
    }
    </div>
  )
}

export default ViewAllStudents
