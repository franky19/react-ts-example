import {  LineChartFracture } from "./lineChart"
import { LevelPresentationTable} from "./TableList"
 
 const WelcomeScreen = () => {
    // const [download, setDownload] = useState(false);
    // const auth=useSelector((state:RootStateOrAny)=>state.auth)
    // const token=auth.token || ""
    // useEffect(() => {
    //     async function downloadApi() {
    //       try {
    //         const response = await axios.get(
    //           `${process.env.REACT_APP_API_URL}/admin/participant-report?download=true`,
    //           {
    //             responseType: "blob",
    //             headers: { Authorization: "Bearer " + token },
    //           }
    //         );
    //         const url = window.URL.createObjectURL(new Blob([response.data]));
    //         const link = document.createElement("a");
    //         link.href = url;
    //         link.setAttribute("download", "participant-demografi.csv");
    //         link.click();
    //         setTimeout(() => window.URL.revokeObjectURL(url), 0);
    //         setDownload(false);
    //       } catch (e) {
    //           alert("Download failed")
    //       }
    //     }
    
    //     if (download) {
    //       downloadApi();
    //     }
    //   }, [download]); // eslint-disable-line  react-hooks/exhaustive-deps
     return(
         <>
         <div className="container-fluid mx-2">
            <div className="row mt-4">
                <div className="col-sm-8">
                    <div className="card" >
                        <div className="card-body" >
                            {/* <LevelPresentationBar/> */}
                        </div>
                    </div>
                   
                    <div className="card mt-2" >
                        <div className="card-body" >
                            <LineChartFracture />
                        </div>
                    </div>
                    
                </div>
                <div className="col-sm-4">
                  
                    <div className="card h-auto w-100 mb-2" >
                        <div className="card-body" >
                            {/* <PieChartOccupation /> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="col-md-4 mt-2  ml-auto">
                <button className="btn btn-outline-primary" type="button" onClick={()=>setDownload(true)}>
                    <MdDownload /> Download Demografi Report
                </button>
            </div> */}
            <div className="table-responsive">
                <LevelPresentationTable/>
            </div>
           
         </div>
        
         </>
     )
 }
 export default WelcomeScreen