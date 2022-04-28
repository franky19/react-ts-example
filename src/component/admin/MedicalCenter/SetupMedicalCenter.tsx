
const SetupMedicalCenter=()=>{
    
    return(
        <>
        <div className="container-fluid">
            <form className="p-4 p-lg-5 ">
                <h4>Setup medical center Name</h4>
                <div className="form-group mt-3">
                    <label htmlFor="medicalCenter">Medical Center Name</label>
                    <input type="text" className="form-control" id="medicalCenter" placeholder='Medical Center' />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="shortname">Shortname Medical Center</label>
                    <input type="text" className="form-control" id="shortname" placeholder={`Shortname Medical Center`} />
                </div>
                <div className="form-group">
                    <label htmlFor="slideshow">Upload Logo</label>
                    <div className="input-group">
                        <div className="custom-file">
                            <label className="custom-file-label" htmlFor="UploadLogo">
                                <input type="file" className="custom-file-input bg-light" id="UploadLogo" aria-describedby="UploadLogo" />
                            </label>
                        </div>
                    </div>
                </div>
                {/* {status.editable ? (
                    <div className='row d-flex align-items-center justify-content-center flex-column my-6'  >
                        <button type="button" className='btn btn-primary' style={{backgroundColor: 'rgba(41, 22, 111, 1)'
        ,color:"white"}} onClick={onSubmit} disabled={status.loading}>
                            {status.loading ? "Loading..." : "Save"} 
                        </button>
                    </div>
                ) : (
                    <div className='row d-flex align-items-center justify-content-end flex-row my-6'  >
                            <button type="button" className='btn btn-warning mr-3' onClick={() => setStatus(prev => ({...prev, editable: true}))}>
                                Edit 
                            </button>
                            <button type="button" className='btn btn-danger' onClick={onDelete}>
                                Delete 
                            </button>
                    </div>
                )} */}
                <div className='row d-flex align-items-center justify-content-end flex-row my-6'  >
                            <button type="button" className='btn btn-warning mr-3'>
                                Edit 
                            </button>
                            <button type="button" className='btn btn-danger'>
                                Delete 
                            </button>
                    </div>
            </form>
        </div>
        
        </>
    )
}

export default SetupMedicalCenter
